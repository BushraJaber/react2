import React from 'react';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';  
import Home from './components/Home.jsx';  
import Login from './components/Login.jsx';  
import Register from './components/Register.jsx';  
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}
