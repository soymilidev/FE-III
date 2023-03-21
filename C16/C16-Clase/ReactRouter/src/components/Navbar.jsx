import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button onClick={() => navigate(-1)}>↩</button>
      <Link to={routes.home}>
        <h3>Inicio</h3>
      </Link>
      <Link to={routes.ingredients}>
        <h3>Ingredientes</h3>
      </Link>
      <Link to={routes.contact}>
        <h3>Contacto</h3>
      </Link>
      <Link to={routes.about}>
        <h3>Acerca de</h3>
      </Link>
    </div>
  );
};

export default Navbar;

// Link: se utiliza para la navegación. + para una interacción activa del usuario, como clic en palabra. 
// Es más bien un elemento HTML, no algo que se ejecuta.