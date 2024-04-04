import { Routes,Route,NavLink } from "react-router-dom";
import "./App.css";
// import { useState } from "react";
import Home from "./components/Home"
import Support from "./components/Support";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import About from "./components/About";
import MainHeader from "./components/MainHeader";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
          {/* i have made home page default component/Route */}
          <Route index element={<Home/>}></Route>
          <Route path="/support" element={<Support/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/labs" element={<Labs/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>    
  );
}

export default App;
