import { fetcher } from "config";
import { tmdbAPI } from "config";
import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";

const MovieVideo = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(tmdbAPI.getMovieVideo(movieId), fetcher);
  console.log("MovieVideo ~ data", data);
  return <div></div>;
};

export default MovieVideo;
