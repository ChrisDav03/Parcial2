import { createSlice } from '@reduxjs/toolkit'

export const jsonSlice = createSlice({
  name: 'title',
  initialState: {
    titles: [],
    isLoading: false,
  },
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    setTitles: (state, action) => {
      state.isLoading = false;
      state.titles = action.payload; 
    }
  }
})

export const { startLoading, setTitles } = jsonSlice.actions;
