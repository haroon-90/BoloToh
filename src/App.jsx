import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar className="navbar-class " />
      <Sidebar className="flex flex-grow-1 min-h-[calc(100vh-128px)]" />
      <Footer className="w-full bg-gray-800 text-white text-center p-4" />
    </>
  )
}

export default App
