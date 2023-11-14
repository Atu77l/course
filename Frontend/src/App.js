import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Detail from './Component/Course/CourseDetail';
import Page_404 from './Component/Layout/Page_404';
import Home from './Component/Home/Home';
import Dashboard from './Component/Course/CourseList';
import Profile from './Component/Student/Profile';
import Login from './Component/Layout/Login';
import Signup from './Component/Layout/Register';
import Teacher from './Component/Teacher/Teacher';
import About from './Component/Layout/About';
import Contact from './Component/Layout/Contact';

const App = () => {
  return (
    <>
  <Router>
        <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/register' exact element={<Signup/>}/>
        <Route path='/detail' exact element={<Detail/>}/>
        <Route path='/profile' exact element={<Profile/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/teacher' exact element={<Teacher/>}/>
        <Route path='*' element={<Page_404/>}/>
        </Routes>
        {/* Flow ,User Can see our detail and enrolled in course and see all enrolled course */}
        {/* Flow ,Teacher can see our detail and all course detail and No.of student enrolled in it. */}

  </Router>
    </>
  )
}

export default App