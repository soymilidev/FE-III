import { Link } from 'react-router-dom'
import { routes } from '../routes'

const Navbar = () => {

  return (
    <div className='navbar'>
      <Link to={routes.home}><h3>Inicio</h3></Link>
      <Link to={routes.beer}><h3>Cerveza</h3></Link>
      <Link to={routes.contacto}><h3>Contacto</h3></Link>
    </div>
  )
}

export default Navbar