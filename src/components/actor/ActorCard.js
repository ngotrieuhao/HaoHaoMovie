import Button from "components/button/Button";
import { tmdbAPI } from "config";
import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ActorCard = ({ item }) => {
  const { name, profile_path, id } = item;

  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <div className="film__item--img">
        <img
          src={tmdbAPI.image500(profile_path)}
          alt="poster-film"
          className="w-full h-[350px] object-fill rounded-lg cursor-pointer"
          onClick={() => navigate(`/actor/${id}`)}
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3
          className="mt-3 mb-3 text-xl font-bold cursor-pointer hover:underline"
          onClick={() => navigate(`/actor/${id}`)}
        >
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ActorCard;
