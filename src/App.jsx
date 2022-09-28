
import Cabeza from './components/header'
import Fullcards from './components/fullcards'
import Footer from './components/footer'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <div className='header'>
        <Cabeza />
      </div>
      <div className="card">
        <Fullcards />
      </div>
      <div className='foot'>
        <Footer />
      </div>
    </div>
  )
}

export default App
