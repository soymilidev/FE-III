import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Ingredients from './Pages/Ingredients'
import NotFound from './Pages/NotFound'
import { routes } from './routes'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <h1>Recetario</h1>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.ingredients} element={<Ingredients/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div> 
  )
}

export default App

// Routes va a funcionar como etiqueta padre para todas las rutas que vayamos a necesitar en nuestra App.
// Route va a ser la ruta individual el cual va requerir de dos propiedades: path y element.