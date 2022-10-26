import React from "react";
import MovieCard, { MovieSkeleton } from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import Reveal from "react-reveal/Reveal";

// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>

const MovieLists = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];

  return (
    <>
      <Reveal>
        <div className="movie-lists">
          {isLoading && (
            <>
              <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}
              >
                <SwiperSlide>
                  <MovieSkeleton></MovieSkeleton>
                </SwiperSlide>
                <SwiperSlide>
                  <MovieSkeleton></MovieSkeleton>
                </SwiperSlide>
                <SwiperSlide>
                  <MovieSkeleton></MovieSkeleton>
                </SwiperSlide>
                <SwiperSlide>
                  <MovieSkeleton></MovieSkeleton>
                </SwiperSlide>
              </Swiper>
            </>
          )}
          {!isLoading && (
            <Swiper
              grabCursor={"true"}
              // spaceBetween={20}
              slidesPerView={"auto"}
            >
              {movies.length > 0 &&
                movies.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCard item={item}></MovieCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </Reveal>
    </>
  );
};

export default MovieLists;
