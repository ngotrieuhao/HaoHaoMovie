import Button from "components/button/Button";
import TvList from "components/tv/TvList";
import { auth } from "firebase-app/firebase-config";
import { signOut } from "firebase/auth";
import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Banner from "../components/banner/Banner";
import MovieLists from "../components/movies/MovieLists";

const HomePage = () => {
  const navigate = useNavigate();
  /**Scroll To Top */
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>HaoHao Cinema</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Banner></Banner>
      <section className="pb-20 movies-layout page-container">
        <div className="flex items-center justify-between max-w-[1260px] page-container--title">
          <h2 className="mb-5 text-3xl font-bold text-white capitalize lists__film--head">
            Now Playing
          </h2>
          <Button
            bgColor="slate"
            className="mb-5 border border-white rounded-full select-none hover:bg-secondary hover:text-whiteColor hover:border-none"
            heightSize="shortest"
            widthSize="large"
            onClick={() => navigate(`/movies`)}
          >
            View more
          </Button>
        </div>

        <MovieLists></MovieLists>
      </section>

      <section className="pb-20 movies-layout page-container">
        <div className="flex items-center justify-between max-w-[1260px] page-container--title">
          <h2 className="mb-5 text-3xl font-bold text-white capitalize lists__film--head">
            Latest
          </h2>
          <Button
            bgColor="slate"
            className="mb-5 border border-white rounded-full select-none hover:bg-secondary hover:text-whiteColor hover:border-none"
            heightSize="shortest"
            widthSize="large"
            onClick={() => navigate(`/movies`)}
          >
            View more
          </Button>
        </div>

        <MovieLists type="upcoming"></MovieLists>
      </section>
      <section className="pb-20 movies-layout page-container">
        <div className="flex items-center justify-between max-w-[1260px] page-container--title">
          <h2 className="mb-5 text-3xl font-bold text-white capitalize lists__film--head">
            Top Rated
          </h2>
          <Button
            bgColor="slate"
            className="mb-5 border border-white rounded-full select-none hover:bg-secondary hover:text-whiteColor hover:border-none"
            heightSize="shortest"
            widthSize="large"
            onClick={() => navigate(`/movies`)}
          >
            View more
          </Button>
        </div>

        <MovieLists type="top_rated"></MovieLists>
      </section>

      {/*  */}
      <section className="pb-20 movies-layout page-container">
        <div className="flex items-center justify-between max-w-[1260px] page-container--title">
          <h2 className="mb-5 text-3xl font-bold text-white capitalize lists__film--head">
            TV Show Popular
          </h2>
          <Button
            bgColor="slate"
            className="mb-5 border border-white rounded-full select-none hover:bg-secondary hover:text-whiteColor hover:border-none"
            heightSize="shortest"
            widthSize="large"
            onClick={() => navigate(`/tv`)}
          >
            View more
          </Button>
        </div>

        <TvList type="on_the_air"></TvList>
      </section>

      {/*  */}
      <section className="pb-20 movies-layout page-container">
        <div className="flex items-center justify-between max-w-[1260px] page-container--title">
          <h2 className="mb-5 text-3xl font-bold text-white capitalize lists__film--head">
            TV Show Top Rated
          </h2>
          <Button
            bgColor="slate"
            className="mb-5 border border-white rounded-full select-none hover:bg-secondary hover:text-whiteColor hover:border-none"
            heightSize="shortest"
            widthSize="large"
            onClick={() => navigate(`/tv`)}
          >
            View more
          </Button>
        </div>

        <TvList></TvList>
      </section>
      <ScrollToTop smooth className="pl-[6px]" />
    </Fragment>
  );
};

export default HomePage;
