import { createSlice } from '@reduxjs/toolkit';

export const titleSlice = createSlice({
    name: 'title',
    initialState: {
        titles: [],
        loading: false,
    },
    reducers: {
        startLoadingTitles: (state) => {
            state.loading = true;
        },
        setTitles: ( state, action ) => {
            state.loading = false;
            state.titles = action.payload.titles;
        }
    }
});


export const { startLoadingTitles, setTitles } = titleSlice.actions;