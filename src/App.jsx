import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Main from './components/main'
import Footer from './components/footer'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter basename="/BoloToh">
        <Navbar className="navbar-class " />
        <Main className="flex flex-grow-1 min-h-[calc(100vh-128px)]" />
        <Footer className="w-full bg-gray-800 text-white text-center p-4" />
      </BrowserRouter>
    </>
  )
}

export default App
