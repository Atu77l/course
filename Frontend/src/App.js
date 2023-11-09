import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Detail from './Component/Course/CourseDetail'
import Page_404 from './Component/Layout/Page_404'
import Home from './Component/Home/Home'
import Dashboard from './Component/Course/CourseList'
import Profile from './Component/Student/Profile';
import Login from './Component/Layout/Login';
import Signup from './Component/Layout/Register';

const App = () => {
  return (
    <>
  <Router>
        <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/dashboard' exact element={<Dashboard/>}/>
        <Route path='/detail' exact element={<Detail/>}/>
        <Route path='/profile' exact element={<Profile/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/register' exact element={<Signup/>}/>
        <Route path='*' element={<Page_404/>}/>
        </Routes>
  </Router>
    </>
  )
}

export default App