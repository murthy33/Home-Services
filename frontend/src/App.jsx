import React from 'react';
import Home from './home/Home';
import Aboutt from './aboutt/Aboutt';
import { Route,Routes } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Electriciann from './electriciann/Electriciann';
import Acrepairr from './acrepair/Acrepairr';
import Carpenterr from './carpenter/Carpenterr';
import Plumberr from './plumber/Plumberr';
import Painterr from './painter/Painterr';
function App() {
  return (
    <>
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<Aboutt/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/electrician" element={<Electriciann/>}/>
      <Route path="/plumber" element={<Plumberr/>}/>
      <Route path="acrepair/" element={<Acrepairr/>}/>
      <Route path="/painter" element={<Painterr/>}/>
      <Route path="/carpenter" element={<Carpenterr/>}/>

    </Routes>
    </div>
    </>
  );
}

export default App
