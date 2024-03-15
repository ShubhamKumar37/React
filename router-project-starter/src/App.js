import "./App.css";
import NavBar from './Components/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashBoard from './pages/DashBoard';
import Contact from './pages/Contact';
import About from './pages/About';
import { useState } from "react";

function App() {

  const [IsLogged, SetIsLogged] = useState(false);

  return (
    <div>
      <NavBar IsLogged={IsLogged} SetIsLogged={SetIsLogged}></NavBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
      </Routes>

    </div>
  );
}

export default App;
