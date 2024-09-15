import React from 'react'
import Home from './home/Home';
import { Route, Routes } from "react-router-dom";
import {BrowserRouter as Router } from 'react-router-dom';
import Courses from './courses/courses';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <div >

    <Routes>
      <Route path='/'element={ <Home />} />
      <Route path='/course'element={<Courses/>}/>
      <Route path='/signup'element={<Signup/>}/>

    </Routes>
    </div>
    </>
  )
}

export default App
