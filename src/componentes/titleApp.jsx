import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTitles } from './jsonThunks';

export const titleApp = () => { 
    const dispatch = useDispatch();
    const titles = useSelector(state => state.jsonSlice.titles); // Se agrega esta línea para extraer los títulos del estado.

    useEffect(() => {
        dispatch(getTitles());
    }, []);

    return (
        <div>
            <h1>Titles</h1>
            {titles.map(title => <p key={title.id}>{title.title}</p>)} {/* Se agrega esta línea para mostrar los títulos en la interfaz de usuario. */}
        </div>
    );
}
