import { useState } from 'react'
import { Provider } from 'react-redux'; // Se agrega el import del Provider de react-redux
import React from "react";
import ReactDOM from "react-dom/client";
import { titleApp } from './componentes/titleApp'
import { store } from './store'; // Se importa el store de Redux creado en el archivo que contiene el slice y los thunks

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Provider store={store}> {/* Se envuelve el componente titleApp dentro del Provider */}
        <div>
          <titleApp /> {/* Se llama al componente titleApp dentro del div */}
        </div>
      </Provider>
    </div>
  )
}

export default App
