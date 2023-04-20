import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTitles } from './store/slices/titles';


const App = () => {

  const dispatch = useDispatch();
  const { loading, titles = []} = useSelector( state => state.titles );


  useEffect(() => {
    dispatch( getTitles() );    
  }, [])
  

  return (
    <>
        <h1>TitleApp</h1>
        <hr />
        {loading && <img src="./assets/spinner.gif" />}

        <ul>
          {
            titles.map( ({ title }) => (
              <li key={ title }>{ title }</li>
            ))
          }
        </ul>
    </>
  )
}

export default App