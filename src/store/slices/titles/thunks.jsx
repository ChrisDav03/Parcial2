import { titleApi } from '../../../api/titleApi';
import { startLoadingTitles, setTitles } from './titleSlice';



export const getTitles = () => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingTitles() );
        const  {data}  = await titleApi.get();
        dispatch( setTitles({ titles: data }) );
    }
}