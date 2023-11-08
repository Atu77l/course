import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Detail from './Component/Course/Detail'
import Page_404 from './Component/Layout/Page_404'
import Home from './Component/Home/Home'
import Dashboard from './Component/Course/Box'
import Profile from './Component/Student/Profile';

const App = () => {
  return (
    <>
  <Router>
        <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/dashboard' exact element={<Dashboard/>}/>
        <Route path='/detail/:id' exact element={<Detail/>}/>
        <Route path='/profile' exact element={<Profile/>}/>
        <Route path='*' element={<Page_404/>}/>
        </Routes>
  </Router>
    </>
  )
}

export default App