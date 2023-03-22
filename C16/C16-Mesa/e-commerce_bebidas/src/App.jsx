import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Beer from "./Pages/Beer";

const App = () => {
  return (
    <div className="App">
      <Navbar /> {/* Agrego el componente Navbar */}
      <h1>Más que solo bebidas, festejemos el encuentro.</h1>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.beer} element={<Beer />} />
        <Route path={routes.contacto} element={<Contacto />} />
      </Routes>
    </div>
  );
};

export default App;