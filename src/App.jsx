import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inicio from './Componentes/Inicio'
import Footer from './Componentes/footer'
import Formulario from './Componentes/formulario'
import Paginaciones from './Componentes/paginaciones'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto">
              <Link className="nav-link" to="/">Inicio</Link>
              <Link className="nav-link" to="/formulario">Formulario</Link>
              <Link className="nav-link" to="/paginaciones">Paginaciones</Link>
            </ul>
          </div>
        </nav>
        {/* definicion de rutas para paginas */}
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
        <Routes>
          <Route path="/Formulario" element={<Formulario />} />
        </Routes>
        <Routes>
          <Route path="/Paginaciones" element={<Paginaciones />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
