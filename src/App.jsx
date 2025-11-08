import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";

const LazyMovie = React.lazy(() => import("./pages/Movie"));
const LazyGenres = React.lazy(() => import('./pages/Genres'))
const LazyFavorites = React.lazy(() => import("./pages/Favorites"));
const LazySettings = React.lazy(() => import("./pages/Settings"));
const LazyPageNotFound = React.lazy(() => import("./pages/PageNotFound"));

export default function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false}/>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <LazyMovie />
            </Suspense>
          }
        />
        <Route
          path="/:media/:genre"
          element={
            <Suspense fallback={<Spinner />}>
              <LazyGenres />
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
          path="/settings"
          element={
            <Suspense fallback={<Spinner />}>
              <LazySettings />
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
