import { movies } from "../../movies";
import { ADDLISTFAV, REMOVEFAV } from "../actions/addListActions";

const initialState = { favMovies: [] };

const addListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDLISTFAV:
      const checkExisting = state.favMovies.find(
        (item) => item.id === action.payload.id
      );
      if (checkExisting) {
        return state;
      } else {
        const newState = {
          ...state,
          favMovies: [...state.favMovies, action.payload],
        };
        return newState;
      }
    case REMOVEFAV:
      return {
        ...state,
        favMovies: state.favMovies.filter((m) => m.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default addListReducer;
