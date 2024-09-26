import { Footer } from "./components/Footer"
import { Logo } from "./components/Logo"
import { Main } from "./components/Main"
import './App.css'

function App() {
  // Presentational!
  return (
    <div className="app">
      <Logo />
      <main className="content">
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default App
