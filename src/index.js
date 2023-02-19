import React from 'react';
import ReactDOM from 'react-dom';
import MainElement from "./mainBody.js";
import ProjectElement from './CurrentProject.js';
import SocialElement from './socials.js';
import "./style.css";
const App = ()=> {
    return (
    <div className="grid">
        <MainElement />
        <ProjectElement />
        <SocialElement />
    </div>
)
}
ReactDOM.render(
    <App />,document.getElementById('app')
)