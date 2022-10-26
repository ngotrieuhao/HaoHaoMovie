import { MovieSkeleton } from "components/movies/MovieCard";
import { fetcher } from "config";
import { tmdbAPI } from "config";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import ActorCard from "./ActorCard";
import Reveal from "react-reveal/Reveal";

const ActorList = ({ type = "top_rated" }) => {
  const { data, error } = useSWR(tmdbAPI.getTVTopRated(type), fetcher);
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
              spaceBetween={20}
              slidesPerView={"auto"}
            >
              {movies.length > 0 &&
                movies.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ActorCard item={item}></ActorCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </Reveal>
    </>
  );
};

export default ActorList;
