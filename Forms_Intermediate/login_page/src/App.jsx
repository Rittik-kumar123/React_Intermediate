import "./App.css";
import { Routes,Route } from "react-router";
import { useState } from "react";
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashbord from "./pages/Dashbord";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const[isLoggedIn,setLoggedIn] = useState(false);
  return (
    <div className="w-screen h-full bg-gray-900 flex flex-col">
      <Navbar  isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></Navbar>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}></Home>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setLoggedIn}></Login>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setLoggedIn}></Signup>}/>
        <Route path="/dashbord" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashbord></Dashbord>
        </PrivateRoute>
        }/>
      </Routes>
    </div>    
  );
}

export default App;
