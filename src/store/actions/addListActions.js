export const ADDLISTFAV = "ADD TO FAVLİST";
export const REMOVEFAV = "Remove from favlist";

export const addlistFav = (movie) => {
  return {
    type: ADDLISTFAV,
    payload: movie,
  };
};
export const removeFav = (movie) => {
  return {
    type: REMOVEFAV,
    payload: movie,
  };
};
