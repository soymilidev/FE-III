import './App.css'
import RickAndMortyApi from './components/RickAndMortyApi'
import PokemonApi from './components/PokemonApi'

function App() {

  return (
    <div className="App">
      {/* <RickAndMortyApi/> */}
      <PokemonApi/>
      {/* <Simpsons/> */}
    </div>
  )
}

export default App