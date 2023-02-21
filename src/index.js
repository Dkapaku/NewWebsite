import React from 'react';
import ReactDOM from 'react-dom';
import MainElement from "./components/MainBody.js";
import NavBar from "./components/NavBar.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe.js';
import Portfolio from './components/portfolio/Portfolio.js';
const App = ()=> {
    return (
    <div className="grid">
        <NavBar />
        <Routes>
        <Route path ='/' element={<MainElement />}></Route>
        <Route path ='/about-me' element={<AboutMe />}/>
        <Route path ='/portfolio' element = {<Portfolio />}/>
        </Routes>
    </div>
)}
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    ,document.getElementById('app')
)