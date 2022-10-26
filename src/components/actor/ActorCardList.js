import { tmdbAPI } from "config";
import React from "react";
import { useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import { useEffect } from "react";
const ActorCardList = ({ item }) => {
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
  const { name, profile_path, id, known_for_department } = item;
  const navigate = useNavigate();

  return (
    <>
      <Zoom>
        <div className="lists__all--items">
          {/*  */}
          <div className="mx-4 film--item">
            <div className="film--item-img ">
              {profile_path ? (
                <img
                  src={tmdbAPI.image500(profile_path)}
                  onClick={() => navigate(`/actor/${id}`)}
                  alt=""
                ></img>
              ) : (
                <img
                  src="/avatar.png"
                  onClick={() => navigate(`/actor/${id}`)}
                  className="object-cover w-full h-full"
                  alt=""
                ></img>
              )}
            </div>
            <div className="film--item-content">
              <div className="flex items-center mt-4 text-gray-400">
                {known_for_department}
              </div>
              <h6
                className="item--content-h6"
                onClick={() => navigate(`/actor/${id}`)}
              >
                {name}
              </h6>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default ActorCardList;
