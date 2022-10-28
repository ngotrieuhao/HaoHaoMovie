import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { Pagination, Autoplay } from "swiper";
import Zoom from "react-reveal/Zoom";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "hooks/ErrorComponent";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=f3d7dbc9ec21108ebeebed1db9080612`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <section className="h-[800px] pb-16 mb-20 overflow-hidden banner ">
      <Swiper
        grabCursor="true"
        slidesPerView={"auto"}
        // navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, backdrop_path, id, vote_average, poster_path, overview } =
    item;
  const navigate = useNavigate();
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal> */}
      <div className="relative w-full h-full rounded-lg ">
        <div className="absolute inset-0 rounded-lg overlay banner-img">
          <Zoom>
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              className="w-[400px] h-[550px] top-[13%] right-[15%] rounded-lg object-cover absolute"
              alt={title}
            />
          </Zoom>
        </div>

        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          className="w-full h-full rounded-lg"
          alt={title}
        />
        <Zoom>
          <div className="banner-title absolute w-full max-w-[600px] text-white left-[15%] bottom-[25%]">
            <h2
              className="mb-5 text-[50px] font-bold cursor-pointer hover:text-yellow-400"
              onClick={() => navigate(`/movie/${id}`)}
            >
              {title}
            </h2>
            <div className="flex items-center mb-2 cursor-default gap-x-3">
              <p className="leading-6 text-justify overview-banner">
                {overview}
              </p>
            </div>
            <div className="flex items-center mb-5 cursor-default icon-star">
              <div className="flex items-center">
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
                <span
                  className="text-xl "
                  style={{
                    letterSpacing: 2,
                  }}
                >
                  {vote_average}
                </span>{" "}
                / 10
              </div>
            </div>
            <div className="flex gap-x-4">
              <Button
                bgColor="secondary"
                widthSize="default"
                heightSize="short"
                className="rounded-full hover:bg-hoverButton banner-btn"
                onClick={() => navigate(`/movie/${id}`)}
              >
                <div className="flex items-center justify-center gap-x-1 banner-btn--symbol">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg">Watch Trailer</span>
                </div>
              </Button>
              {/* <Button
                bgColor="slate"
                widthSize="large"
                heightSize="short"
                className="rounded-full hover:bg-textColor"
                onClick={() => setShowModal(true)}
              >
                Watch Trailer
              </Button> */}
            </div>
            {/* <Button onClick={() => navigate(`/movie/${id}`)}>Watch Now</Button> */}
          </div>
        </Zoom>
      </div>
    </>
  );
}
export default withErrorBoundary(Banner, {
  FallbackComponent: ErrorComponent,
});
