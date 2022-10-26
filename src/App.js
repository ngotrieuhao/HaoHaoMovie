import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Main from "./components/layout/Main";
import ActorDetailPage from "page/ActorDetailPage";
import { AuthProvider } from "contexts/auth-context";

const HomePage = lazy(() => import("./page/HomePage"));
const TvPage = lazy(() => import("./page/TvPage"));
const MovieDetailPage = lazy(() => import("./page/MovieDetailPage"));
const TVDetailPage = lazy(() => import("./page/TVDetailPage"));
const MoviePage = lazy(() => import("./page/MoviePage"));
const SignUpPage = lazy(() => import("./page/SignUpPage"));
const LoginPage = lazy(() => import("./page/LoginPage"));
const ActorPage = lazy(() => import("./page/ActorPage"));
const PageNotFound = lazy(() => import("./page/PageNotFound"));

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Suspense fallback={<></>}>
          <Routes>
            <Route element={<Main></Main>}>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
              <Route path="/tv" element={<TvPage></TvPage>}></Route>
              <Route path="/actor" element={<ActorPage></ActorPage>}></Route>
              <Route
                path="/movie/:movieId"
                element={<MovieDetailPage></MovieDetailPage>}
              ></Route>
              <Route
                path="/tv/:tvId"
                element={<TVDetailPage></TVDetailPage>}
              ></Route>
              <Route
                path="/actor/:actorId"
                element={<ActorDetailPage></ActorDetailPage>}
              ></Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
              <Route
                path="/sign-up"
                element={<SignUpPage></SignUpPage>}
              ></Route>
            </Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
