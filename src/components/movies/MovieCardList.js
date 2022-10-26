import LoadingSkeleTon from "components/loading/LoadingSkeleTon";
import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";
import Zoom from "react-reveal/Zoom";
import { useEffect } from "react";
const MovieCardList = ({ item }) => {
  /**Scroll To Top */
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      0
    );
  }, []);
  const { title, vote_average, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <>
      <Zoom>
        <div className="lists__all--items">
          {/*  */}
          <div className="mx-4 film--item">
            <div className="film--item-img ">
              <span className="film--item-status">HD Vietsub</span>

              <img
                src={tmdbAPI.image500(poster_path)}
                onClick={() => navigate(`/movie/${id}`)}
                alt=""
              ></img>
            </div>
            <div className="film--item-content">
              <div className="flex items-center mt-4 text-gray-400">
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
                <span className="!text-white !text-lg">{vote_average} </span>/10
              </div>
              <h6
                className="item--content-h6"
                onClick={() => navigate(`/movie/${id}`)}
              >
                {title}
              </h6>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export const MovieSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <LoadingSkeleTon
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      ></LoadingSkeleTon>
      <div className="flex flex-col flex-1">
        <h3 className="mt-3 mb-3 text-xl font-bold ">
          <LoadingSkeleTon width="100%" height="20px"></LoadingSkeleTon>
        </h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>
            <LoadingSkeleTon width="50px" height="10px"></LoadingSkeleTon>
          </span>
          <span>
            <LoadingSkeleTon width="30px" height="10px"></LoadingSkeleTon>
          </span>
        </div>
        <LoadingSkeleTon
          width="100%"
          height="45px"
          radius="6px"
        ></LoadingSkeleTon>
      </div>
    </div>
  );
};

export default MovieCardList;
