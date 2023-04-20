import { configureStore } from '@reduxjs/toolkit';
import { titleSlice } from './slices/titles';

export const store = configureStore({
  reducer: {
      titles: titleSlice.reducer,

      
  }
 
})