import './App.css'
import RecipesApi from './components/RecipesApi'
import RandomApi from './components/DogsApi'

function App() {

  return (
    <div className="App">
      {/* <RandomApi/> */}
      <RecipesApi/>
    </div>
  )
}

export default App