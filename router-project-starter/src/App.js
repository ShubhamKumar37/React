import "./App.css";
import NavBar from './Components/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import DashBoard from './Components/DashBoard';
import Contact from './Components/Contact';
import About from './Components/About';
import { useState } from "react";

function App() {

  const [IsLogged, SetIsLogged] = useState(false);

  return (
    <div>
      <NavBar IsLogged={IsLogged} SetIsLogged={SetIsLogged}></NavBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login SetIsLogged={SetIsLogged}></Login>}></Route>
        <Route path="/signup" element={<Signup SetIsLogged={SetIsLogged}></Signup>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
      </Routes>

    </div>
  );
}

export default App;
