import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// BrowserRouter se va a encargar de contener todo el sistema de rutas que va a trabajar en nuestra App.
// Es decir, que va a ser el padre de todos los elementos de la librería que vayamos a usar.