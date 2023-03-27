import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes";


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <nav>
                <button onClick={() => navigate(-1)}>↩</button>
                <ul>
                    <li>
                        <Link to={routes.home}><h3>Inicio</h3></Link>
                    </li>
                    {/* <li>
                        <Link to="/detalle/:id"><h3>Detalles</h3></Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;