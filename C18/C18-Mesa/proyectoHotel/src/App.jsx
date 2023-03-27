import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Details from './Pages/Details';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import { routes } from './routes';


function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.details} element={<Details />} />
        {/* <Route path="/detalle/:id" element={<Details />} /> */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;