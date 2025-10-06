import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";

const LazyMovieDetails = React.lazy(() => import("./pages/MovieDetails"));
const LazyFavorites = React.lazy(() => import("./pages/Favorites"));
const LazyPageNotFound = React.lazy(() => import("./pages/PageNotFound"));

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movie/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <LazyMovieDetails />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Spinner />}>
              <LazyFavorites />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <LazyPageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}
