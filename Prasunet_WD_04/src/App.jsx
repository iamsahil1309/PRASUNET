import './App.css'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import Home from './components/Home'


function App() {

  return (
    <>
      <main>
        <NavBar/>
        <Home/>
        <Skills/>
        <Projects/>
        <Contacts/>
      </main>
    </>
  )
}

export default App
