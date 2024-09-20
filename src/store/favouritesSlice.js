import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite(state, action) {
      if (user) addFavoriteToFirebase(user.uid, action.payload);
      state.favourites = [...state.favourites, action.payload];
    },
    clearFavourites(state) {
      state.favourites = [];
    },
    removeFavourite(state, action) {
      state.favourites = state.favourites.filter(
        (favourite) => favourite !== action.payload
      );
    },
  },
});

export const getFavoritesFromSource = () => async (dispatch) =>{
  const user = auth.currentUser;
  if (user) {
    const q = query (collection(db, `user/${user.uid}/favorites`))
    const favorites = q.docs.map((doc)) => doc.
}

export const { addFavourite, clearFavourites, removeFavourite } =
  favouritesSlice.actions;

export default favouritesSlice.reducer;