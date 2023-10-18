import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import CardList from './components/CardList'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <NavBar countAll={count}/>
     <CardList/>
     <Footer/>
    </>
  )
}

export default App
