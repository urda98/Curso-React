import { useState } from 'react'
import RandomUser from './components/RandomUser'
import { Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Footer from './components/footer'
import Contacto from './pages/Contacto'
import Clientes from './pages/Clientes'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Servicios from './pages/Servicios'
import "bootstrap/dist/css/bootstrap.min.css";



function App() {


  return (
/*     <div>
      <h1>Random User API</h1>
      <RandomUser/>
    </div> */

    <>
      <Header/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/clientes" element={<Clientes/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/servicios" element={<Servicios/>}/>
            <Route path="/productos" element={<Productos/>}/>
            
          </Routes>          
        </Container>
      <Footer/>
    </>
  )
}

export default App
