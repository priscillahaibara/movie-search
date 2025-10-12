import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";

const LazyMovie = React.lazy(() => import("./pages/Movie"));
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
              <LazyMovie />
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
