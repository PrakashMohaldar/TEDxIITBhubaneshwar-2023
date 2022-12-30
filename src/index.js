import React from 'react' 
import {createRoot} from 'react-dom/client'
import Home from './pages/Home';
import Organizers from './pages/Organizers';
import "typeface-oswald";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/icons.css";
import "./assets/css/preset.css";
import "./assets/css/theme.css";
import "./assets/css/responsive.css";
import "./assets/css/fontello.css"
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';


const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Organizers' element={<Organizers/>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
  </BrowserRouter>
  </>

)
