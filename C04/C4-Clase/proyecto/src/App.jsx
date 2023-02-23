// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// 1. importar componente
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'
import Card from './components/Card'

function App() {
  let elementos = [45,87,30]
  
  return (
    <div className="App">
    
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <ClassComponent>
        
      </ClassComponent>

      <FunctionComponent>

      </FunctionComponent>
      <Card elemento={elementos[0]}/>
      <Card elemento={elementos[1]}/>
      <Card elemento={elementos[2]}/>
      <Card elemento={"dos mil"}/>

    </div>
  )
}

export default App
