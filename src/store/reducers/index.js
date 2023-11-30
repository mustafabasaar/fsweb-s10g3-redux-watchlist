import { combineReducers } from "redux";
import addListReducer from "./addListReducer";
import allMoviesReducer from "./allMovieReducer";

export const reducers = combineReducers({
  addList: addListReducer,
  movieList: allMoviesReducer,
});
