import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Bienvenidos al recetario DH</h1>
            <Outlet />
        </div>
    )
}

export default Home