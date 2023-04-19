import { setTitles, startLoading } from "./jsonSlice"

export const getTitles = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const url = `https://jsonplaceholder.typicode.com/todos`;
    const resp = await fetch(url);
    const data = await resp.json();

    dispatch(setTitles(data));
  };
};
