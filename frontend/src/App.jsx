
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
// import Home from "./pages/Home"
// import Landing from "./components/Landing"


function App() {
  return (
    // <div className="flex flex-col justify-center items-center w-full">
    //   <Navbar />
    //   <Home />
    //   <Footer />
    // </div>
    <>
      {/* <h1 className="text-3xl font-bold underline">React Router Trial!</h1> */}
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;
