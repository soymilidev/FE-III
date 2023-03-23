import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Ingredients from "./Pages/Ingredients";
import NotFound from "./Pages/NotFound";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <LoginForm /> {/* Agrego componente */}
      <Navbar />
      <h1>Bienvenidos al recetario DH</h1>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.ingredients} element={<Ingredients />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.about} element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;