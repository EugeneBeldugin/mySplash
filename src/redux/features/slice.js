import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {}
};

const playerSlice = createSlice({
  name: 'item',
  initialState
  // reducers: {
  //   setItem: (state, action) => {
  //     state.itemPage = action.payload.itemPage
  //   }
  // }
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;