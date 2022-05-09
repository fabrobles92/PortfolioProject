import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import './App.css'
import NavBar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
