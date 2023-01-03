import { MovieSkeleton } from "components/movies/MovieCard";
import { fetcher } from "config";
import { tmdbAPI } from "config";
import React, { Fragment, useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import TvCard from "./TvCard";
import Reveal from "react-reveal/Reveal";
import { Navigation } from "swiper";

const TvList = ({ type = "top_rated" }) => {
  const { data, error } = useSWR(tmdbAPI.getTVTopRated(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];

  const prevRef = useRef < HTMLDivElement > null;
  const nextRef = useRef < HTMLDivElement > null;

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
              className="swipper__lists"
              grabCursor={"true"}
              slidesPerView={"auto"}
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current, // Assert non-null
                nextEl: nextRef.current, // Assert non-null
              }}
            >
              {movies.length > 0 &&
                movies.map((item) => (
                  <Fragment>
                    <SwiperSlide key={item.id}>
                      <TvCard item={item}></TvCard>
                    </SwiperSlide>
                    <div ref={prevRef}></div>
                    <div ref={nextRef}></div>
                  </Fragment>
                ))}
            </Swiper>
          )}
        </div>
      </Reveal>
    </>
  );
};

export default TvList;
