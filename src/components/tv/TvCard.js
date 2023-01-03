import Button from "components/button/Button";
import { tmdbAPI } from "config";
import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TvCard = ({ item }) => {
  const {
    backdrop_path,
    original_name,
    name,
    poster_path,
    vote_average,
    id,
    first_air_date,
  } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <div className="film__item--img">
        <img
          src={tmdbAPI.image500(poster_path)}
          alt="poster-film"
          className="w-full h-[350px] object-fill rounded-lg cursor-pointer"
          onClick={() => navigate(`/tv/${id}`)}
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3
          className="mt-3 mb-3 text-xl font-bold cursor-pointer movie__lists--title hover:underline"
          onClick={() => navigate(`/tv/${id}`)}
        >
          {original_name}
        </h3>
        <div className="flex items-center justify-between mb-6 text-sm ">
          <div className="opacity-50">
            <span>{new Date(first_air_date).getFullYear()}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="opacity-50">
              {parseFloat(vote_average).toFixed(1)}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#F5B50A"
              className="w-6 h-6 mr-3"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <Button
          bgColor="primary"
          className="flex items-center justify-center text-xl font-bold gap-x-2 btn-movie--detail"
          onClick={() => navigate(`/tv/${id}`)}
        >
          Watch Now
          <BsPlayCircleFill size={25}></BsPlayCircleFill>
        </Button>
      </div>
    </div>
  );
};

export default TvCard;
