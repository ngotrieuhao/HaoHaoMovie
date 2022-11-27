export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const api_key = `${process.env.REACT_APP_API_KEY}`;
const tmbEndPoint3 = "https://api.themoviedb.org/3";
const tmbEndPoint = "https://api.themoviedb.org/3/movie";
const tmbEndPointSearch = "https://api.themoviedb.org/3/search/movie";
const tmbTVEndPointSearch = "https://api.themoviedb.org/3/search/tv";
const tmbTVEndpoint = "https://api.themoviedb.org/3/tv";
const tmbActorEndPoint = "https://api.themoviedb.org/3/person";
const tmbActorEndPointSearch = "https://api.themoviedb.org/3/search/person";

export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmbEndPoint}/${type}?api_key=${api_key}&page=${page}`,
  getMovieDetails: (movieId) => `${tmbEndPoint}/${movieId}?api_key=${api_key}`,
  getMovieMeta: (movieId, type) =>
    `${tmbEndPoint}/${movieId}/${type}?api_key=${api_key}`,
  getMovieSearch: (query, page) =>
    `${tmbEndPointSearch}?api_key=${api_key}&query=${query}&page=${page}`,
  getMovieVideo: (movieId) =>
    `${tmbEndPoint}/${movieId}/videos?api_key=${api_key}`,

  getGenresMovie: (query, page) => `
    ${tmbEndPoint3}/genre/movie/list?api_key=${api_key}`,

  getTVTopRated: (type) => `${tmbTVEndpoint}/${type}?api_key=${api_key}`,
  getTVList: (type, page = 1) =>
    `${tmbTVEndpoint}/${type}?api_key=${api_key}&page=${page}`,
  getTVSearch: (query, page) =>
    `${tmbTVEndPointSearch}?api_key=${api_key}&query=${query}&page=${page}`,
  getTVDetails: (tvId) => `${tmbTVEndpoint}/${tvId}?api_key=${api_key}`,
  getTVMeta: (tvId, type) =>
    `${tmbTVEndpoint}/${tvId}/${type}?api_key=${api_key}`,

  // https://api.themoviedb.org/3/person/popular?api_key=
  getActorList: (type, page = 1) =>
    `${tmbActorEndPoint}/${type}?api_key=${api_key}&page=${page}`,
  getActorDetails: (actorId) =>
    `${tmbActorEndPoint}/${actorId}?api_key=${api_key}`,
  getActorSearch: (query, page) =>
    `${tmbActorEndPointSearch}?api_key=${api_key}&query=${query}&page=${page}`,

  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
