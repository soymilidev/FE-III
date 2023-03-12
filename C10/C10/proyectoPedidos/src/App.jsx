import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import lemonLogo from './assets/logo-Lemon.png'

function App() {
  return (
    <>
      <img src={lemonLogo} className="logo lemon" alt="lemon logo" />
      <Header/>
      <div className="App">
        <Form />
      </div>
    </>
  )
}

export default App