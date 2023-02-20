import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Bienvenidos</h1>
      <p>Somos un lugar especializado en el cuidado de tus mascotas.</p>
      <img src="/circular-veterinaria.png" alt="Veterinaria" />
      <h2>Próximos turnos</h2>
      <ul>
        <li>Mascota: Luna | Turno: 10:00 am</li>
        <li>Mascota: Rocky | Turno: 11:00 am</li>
      </ul>
{/*       <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
