import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Aspects from './components/Aspects';
import FreeForm from './components/FreeForm';
import Video from './components/Video';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Aspects/>}/>
      <Route path='/freeform' element={<FreeForm/>}/>
      <Route path='/video' element={<Video/>}/>
    </Routes>
  </Router>

    )
}

export default App;