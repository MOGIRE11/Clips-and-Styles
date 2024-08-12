import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"

function App() {

  return (
    < div className="flex flex-col justify-center items-center w-full">
       <Navbar/>
       <Home/>
       <Footer/>
    </div>
  )
}

export default App
