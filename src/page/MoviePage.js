import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { MovieSkeleton } from "../components/movies/MovieCard";
import { fetcher, tmdbAPI } from "../config";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
import { v4 } from "uuid";
import MovieCardList from "components/movies/MovieCardList";
import ScrollToTop from "react-scroll-to-top";

const itemsPerPage = 20;
const MoviePage = () => {
  /**Scroll To Top */
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);

  const movies = data?.results || [];

  /** */
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (!data || !data.total_results) return;
    // Fetch items from another resources.
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;

    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  // if (!data) return null;
  // const { page, total_pages } = data;
  return (
    <>
      <div className="select-none py-28 page-container wrapp-list--page">
        <div className="flex mb-10 wrapp-search">
          <div className="flex-1 search">
            <input
              type="text"
              className="w-full p-4 text-white outline-none bg-slate-800 rounded-xl"
              placeholder="Type here to search..."
              onChange={handleFilterChange}
            />
          </div>
          <button className="p-4 text-white rounded-lg bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <h2 className="mb-5 text-3xl font-bold text-white capitalize lists__film--head">
          All films
        </h2>

        {loading && (
          <div className="grid grid-cols-4 gap-10 wrapp-list--item">
            {new Array(itemsPerPage).fill(0).map(() => (
              <MovieSkeleton key={v4()}></MovieSkeleton>
            ))}
          </div>
        )}
        <div className="grid grid-cols-4 gap-10 wrapp-list--item">
          {!loading &&
            movies.length > 0 &&
            movies.map((item) => (
              <MovieCardList key={item.id} item={item}></MovieCardList>
            ))}
        </div>

        <div className="mt-20 wrapp-pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </div>
      </div>
      <ScrollToTop smooth className="pl-[6px]" />
    </>
  );
};

export default MoviePage;
