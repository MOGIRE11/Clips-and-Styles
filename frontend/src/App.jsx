import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Landing from "./components/Landing"

function App() {

  return (
    < div className="flex flex-col justify-center items-center w-full">
       <Navbar/>
       <Home/>
       <Footer/>
       <Landing/>
    </div>
  )
}

export default App
