import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.js";
import Navbar from "./components/navbar/Navbar.js";
import { Login } from "./components/login/Login.js";
import { Register } from "./components/register/Register.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
      </Routes>
    </div>
  );
}

export default App;
