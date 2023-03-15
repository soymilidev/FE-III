import { useState } from 'react'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      { toggle ?
        <ClassComponent titulo='Este es el componente de clase'/>
        :
        <FuncComponent titulo='Este es el componente de función'/>
      }
      <button onClick={() => setToggle(!toggle)}>
        Cambiar a componente de {toggle ? 'función' : 'clase' }
      </button>
    </div> 
  )
}

export default App
