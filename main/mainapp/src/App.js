// Purpose: Main page for the website.
import './App.css';
import React from 'react';
import instaImg from './images/instagram.png';
import portImg from './images/linkedin.png';
import mainImg from './images/pf image 1.jpg';
import skillImg from './images/pngegg.png';
import Slider from './components/Slider';


function App() {
  return (
    <div className="App">
      <header>
        <div id="links">
            <ul>
                <a href="https://www.instagram.com/maitreya.vfx/"><img id="insta" src={instaImg} alt="insta"/></a>
                <a href="https://www.linkedin.com/in/dequaveus-reed-580571258/"><img id="port" src={portImg} alt="Port"/></a>
            </ul>
        </div>
        <nav id="nav">
            <h3>DeQuaveus Reed</h3>
            <ul id="nav-links">
                <a href="#slider">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </ul>
        </nav>
    </header> 
    <section>
        <div>
            <div id="about">
                    <p id="cardSUM">Hello! I'm DeQuaveus Reed, a multidisciplinary developer based in Saginaw, MI. 2 years of experience, I thrive at the intersection of digital design and UX/UI. My passion lies in crafting seamless user experiences and visually compelling designs that resonate with audiences and drive engagement.</p>
                    <img id="me" src={mainImg} alt="quay reed"/>
            </div>

            <h4>I have some of my projects below for you to see!</h4>
        </div>
    </section>
    <section id="slider">
        <Slider />
    </section>
    
    <section>
        <div id="skills">
                <h2><img id="skillimg" src={skillImg} alt="hammer"/>Skills</h2>
            <ul>
                <li>UI/UX</li>
                <li>Linux</li>
                <li>Windows</li>
                <li>Unix</li>
                <li>REACT</li>
                <li>Git</li>
                <li>Responsive Web Design</li>
            </ul>
        </div>
    </section>
    <section id="contact">
            <h2>Contact me</h2>
            <div id="contact-info">
                <p>Email : <b>qreed0321@gmail.com</b></p>
                <p>Number : <b>989-702-5599</b></p>
                <p><b>4942 Fontaine Blvd Apt C3, 48603, Saginaw, MI</b></p>
            </div>
    </section>
    <footer>
        <h4 id="foot">&copy; DeQuaveus Reed</h4>
    </footer>
    </div>
  );
}

export default App;
