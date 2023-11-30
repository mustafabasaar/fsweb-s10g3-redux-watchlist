import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addlistFav } from "./store/actions/addListActions";

import {
  nextMovie,
  prevMovie,
  removeMovie,
} from "./store/actions/allMovieAction";

function App() {
  const {
    order: sira,
    disabledNavDirection,
    movies,
  } = useSelector((state) => state.movieList.movies);
  const favMovies = useSelector((store) => store.addList.favMovies);
  console.log("fav movie", favMovies);
  const dispatch = useDispatch();
  function addListHandler(movie) {
    dispatch(prevMovie());
    dispatch(addlistFav(movie));
    dispatch(removeMovie(movie));
  }

  function sonrakiFilm() {
    dispatch(nextMovie());
  }
  function oncekiFilm() {
    dispatch(prevMovie());
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              disabled={disabledNavDirection === "prev"}
              onClick={oncekiFilm}
              className="disabled:opacity-40 select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button
              onClick={() => {
                addListHandler(movies[sira]);
              }}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
