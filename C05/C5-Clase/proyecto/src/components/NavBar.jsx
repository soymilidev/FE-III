import './NavBar.css'


const NavBar = () => {
    let categorias = ["Home", "Catalogo", "About us", "Contacto"]
    return (
        <>
            <ul className="navbar-list">
                {categorias.map((elementoCategoria, index) => <li key={index}>{elementoCategoria}</li>)}
            </ul>
        </>
    )
}

export default NavBar