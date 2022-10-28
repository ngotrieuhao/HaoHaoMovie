import React, { Fragment, useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import MovieCard from "../components/movies/MovieCard";
import { fetcher, tmdbAPI } from "../config";
import { v4 } from "uuid";
import ScrollToTop from "react-scroll-to-top";
import Zoom from "react-reveal/Zoom";

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  /**Scroll To Top */
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  if (!data) return null;
  const {
    backdrop_path,
    poster_path,
    title,
    genres,
    overview,
    release_date,
    vote_average,
    production_companies,
    production_countries,
    runtime,
  } = data;
  const average = vote_average;
  const year = release_date;
  let date = new Date(release_date).getTime();
  let Day = new Date(date).getDate();
  let Month = new Date(date).getMonth() + 1;
  let Year = new Date(date).getFullYear();
  let FormatDate = `${Day}/${Month}/${Year}`;
  return (
    <>
      <div
        className="wrapp__container"
        style={{
          backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
        }}
      >
        <div className="wrapp--container--around">
          <Zoom>
            <div className="wrapp__detail--container">
              <div className="detail__film--img">
                <img src={tmdbAPI.imageOriginal(poster_path)} alt=""></img>
              </div>
              <div className="detail__film--content">
                <h2 className="detail__film--title">{title}</h2>
                <div className="detail__film--rate">
                  {/* <img src="./imgpng/4star.png" alt=""> */}
                  <div className="flex items-center justify-center text-lg text-gray-400 detail__film-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#F5B50A"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="pl-1 text-white">
                      {parseFloat(average).toFixed(1)}
                    </span>
                    /10
                  </div>
                  <div className="flex items-center film--rate-time">
                    <BsClock
                      style={{
                        color: "#bf9722",
                      }}
                    ></BsClock>
                    <p className="detail__film--time">{FormatDate}</p>
                  </div>
                </div>

                <div className="detail__film--details">
                  {genres.length > 0 && (
                    <div className="flex items-center justify-start mb-4 gap-x-5">
                      {genres.map((item) => (
                        <span
                          key={item.id}
                          className="px-4 py-2 text-[18px] font-bold border rounded border-primary text-primary"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex">
                    <p>
                      Director:{" "}
                      {production_companies.length > 0 &&
                        production_companies.map((item) => (
                          <span key={item.id} className=" author-name">
                            {item.name}{" "}
                          </span>
                        ))}
                    </p>
                  </div>

                  <p>
                    Country:{" "}
                    {production_countries.length > 0 &&
                      production_countries.map((item) => (
                        <span key={v4()} className="author-name">
                          {item.name}{" "}
                        </span>
                      ))}
                  </p>
                  <p>
                    Year: <span>{year.length > 0 && year.slice(0, 4)}</span>
                  </p>
                  <p>
                    Duration time: <span>{runtime} minutes</span>
                  </p>
                  <p>
                    Resolution: <span>HD</span>
                  </p>
                </div>
              </div>
            </div>
          </Zoom>
          <div className="wrapp__view--content">
            <div className="wrapp__view--description ">
              <h3>Movie Content</h3>
              <p className="text-lg leading-10 ">{overview}</p>
            </div>
          </div>
        </div>
      </div>

      <MovieMeta type="credits"></MovieMeta>
      <MovieMeta type="videos"></MovieMeta>
      <MovieMeta type="similar"></MovieMeta>
      <ScrollToTop smooth className="pl-[6px]" />
    </>
  );
};

export function MovieMeta({ type = "videos" }) {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, type), fetcher);
  if (!data) return null;
  if (type === "credits") {
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    return (
      <div className="py-10 px-44 crossbar wrapp-cast">
        <h2 className="mb-10 text-3xl text-center ">Cast</h2>

        <div className="grid grid-cols-5 gap-10 cast-grid">
          <Swiper
            grabCursor={"true"}
            // spaceBetween={20}
            slidesPerView={"auto"}
          >
            {cast.length > 0 &&
              cast.slice(0, 20).map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="cast-item" key={item.id}>
                    <img
                      src={
                        item.profile_path
                          ? tmdbAPI.imageOriginal(item.profile_path)
                          : "./avatar.png"
                      }
                      alt=""
                      className="w-full max-w-[250px] h-[250px] object-cover rounded-lg mb-3 select-none"
                    />
                    <h3 className="text-xl font-medium text-center select-none">
                      {item.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    );
  } else {
    const { results } = data;
    if (!results || results.length <= 0) return null;
    if (type === "videos")
      return (
        <div className="px-20 py-10 crossbar wrapp-video">
          <h2 className="mb-10 text-3xl text-center">Trailer</h2>
          <div className="flex flex-col gap-10">
            {results.slice(0, 3).map((item) => (
              <div key={item.id}>
                <div className="w-full aspect-video">
                  <iframe
                    width="885"
                    height="498"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="FULL MATCH — Big E vs. Roman Reigns vs. Bobby Lashley: Raw, Sept. 20, 2021"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="object-fill w-full h-full"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    if (type === "similar")
      return (
        <div className="py-10 px-28 wrapp-similar">
          <h2 className="pl-10 mb-10 text-3xl font-medium lists__film--head">
            Similar Movie
          </h2>
          <div className="movie-lists">
            <Swiper
              grabCursor={"true"}
              spaceBetween={30}
              slidesPerView={"auto"}
            >
              {results.length > 0 &&
                results.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCard item={item}></MovieCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      );
  }
  return null;
}

// function MovieCredit() {
//   const { movieId } = useParams();
//   const { data, error } = useSWR(
//     tmdbAPI.getMovieMeta(movieId, "credits"),
//     fetcher
//   );
//   if (!data) return null;
//   const { cast } = data;
//   if (!cast || cast.length <= 0) return null;

//   return (
//     <div className="px-20 py-10">
//       <h2 className="mb-10 text-3xl text-center">Cast</h2>
//       <div className="grid grid-cols-6 gap-5">
//         {cast.slice(0, 6).map((item) => (
//           <div className="cast-item" key={item.id}>
//             <img
//               src={tmdbAPI.imageOriginal(item.profile_path)}
//               alt=""
//               className="w-full h-[350px] object-cover rounded-lg mb-3"
//             />
//             <h3 className="text-xl font-medium text-center">{item.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MovieVideo() {
//   const { movieId } = useParams();
//   const { data, error } = useSWR(
//     tmdbAPI.getMovieMeta(movieId, "videos"),
//     fetcher
//   );
//   if (!data) return null;
//   const { results } = data;
//   if (!results || results.length <= 0) return null;
//   return (
//     <div className="px-20 py-10">
//       <h2 className="mb-10 text-3xl text-center">Trailer</h2>
//       <div className="flex flex-col gap-10">
//         {results.slice(0, 1).map((item) => (
//           <div key={item.id}>
//             <div className="w-full aspect-video">
//               <iframe
//                 width="885"
//                 height="498"
//                 src={`https://www.youtube.com/embed/${item.key}`}
//                 title="FULL MATCH — Big E vs. Roman Reigns vs. Bobby Lashley: Raw, Sept. 20, 2021"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="object-fill w-full h-full"
//               ></iframe>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MovieSimilar() {
//   const { movieId } = useParams();
//   const { data, error } = useSWR(
//     tmdbAPI.getMovieMeta(movieId, "similar"),
//     fetcher
//   );
//   if (!data) return null;
//   const { results } = data;
//   if (!results || results.length <= 0) return null;
//   return (
//     <div className="px-20 py-10">
//       <h2 className="mb-10 text-3xl font-medium">Similar Movie</h2>
//       <div className="movie-lists">
//         <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
//           {results.length > 0 &&
//             results.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <MovieCard item={item}></MovieCard>
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }

export default MovieDetailPage;
