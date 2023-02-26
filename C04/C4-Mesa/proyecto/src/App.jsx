import './App.css'
import Saludo from './components/Saludo'


function App() {
  let nombres= ["Juan", "Sol"];
  
  return (
      <div>
      <Saludo nombre="Juan">
          <p>Tengo 206 huesos, 650 músculos, 50 billones de células. <br/> No te imaginas lo que es levantar todo eso a la mañana.</p>
      </Saludo>
      </div>
  );
}

export default App
