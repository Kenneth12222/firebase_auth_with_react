

import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Register'
import { ToastContainer } from'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Profile from './components/Profile'
import { auth } from './components/firebase'


function App() {

  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  

  return (
    <Router>
      <div className='App'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route path='/' element={user ? <Navigate to='/profile' /> : <Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<SignUp />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App


