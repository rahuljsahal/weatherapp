import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fav: []
};

export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    ADD_FAV: (state, action) => {
      // Add the action payload (item) to the fav array
      state.fav.push(action.payload);
    },
    REMOVE_FAV: (state, action) => {
        const placeToRemove = action.payload.place;
        state.fav = state.fav.filter((item) => item?.place !== placeToRemove);
      },
  },
});

export const { ADD_FAV, REMOVE_FAV } = favSlice.actions;
export default favSlice.reducer;
