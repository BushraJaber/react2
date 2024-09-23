import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';  
import Home from './components/Home.jsx';  
import Login from './components/Login.jsx';  
import Profile from './components/Profile.jsx';
import Register from './components/Register.jsx';  


import { jwtDecode } from 'jwt-decode';





export default function App() {
  const navigate = useNavigate();

  const [isLogin, setisLogin] = useState(localStorage.getItem("userToken") ? true : false);
  const [userdata, setuserdata] = useState({});

  useEffect( () => {
    const token =localStorage.getItem("userToken");
    if(token){
      setisLogin(true);
      const decoded = jwtDecode(token); 
      setuserdata(decoded);

    }
  
  


} , []);

 

  function handleLogout() {
    localStorage.removeItem("userToken");
    setisLogin(false);
    setuserdata({});
    navigate('/login');
  }

  return (
    <>
      <Navbar isLogin={isLogin} handleLogout={handleLogout} userdata={userdata} /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setisLogin={setisLogin} setuserdata={setuserdata} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Profile' element={<Profile />} />

        <Route path='/*' element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}
