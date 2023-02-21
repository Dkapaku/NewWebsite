import ProjectElement from './CurrentProject.js';
import SocialElement from './Socials.js';
import './style.css';
const MainElement = () => { 
    return ( 
    <div> 
    <h1 className="header">Hello!</h1>
            <h2 className="header2">Welcome to My Site!</h2>
    <div className="sections">
    <iframe className="video1"width='640' height='360' src='https://medal.tv/games/league-of-legends/clip/LHp7LXzBDSl85/yrHZgdqolklO?invite=cr-MSxBSkssNTE5OTg3ODcs' allow='autoplay' allowfullscreen></iframe>
    </div>
    <ProjectElement />
    <SocialElement />
    </div> ) }

export default MainElement;