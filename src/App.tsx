import React, {useState} from 'react'
import logo from './logo.svg';
// import { Button, Typography } from '@mui/material';
import './App.css';
import {Header} from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  const [chooseContent, setChooseContent]= useState('Aboutme')
  return (
    <div className="landing-page">
      <header>
        <h1>My Portfolio</h1>
        <nav> 
          {/* <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a> */}
          <Header chooseContent={chooseContent} setChooseContent={setChooseContent}/>
        </nav>
      </header>
      {/* <section id="content"> */}
        {chooseContent===('About') && <AboutMe />}
        {chooseContent===('Projects') && <Projects />}
        {chooseContent===('Contact') && <ContactMe />}
      {/* </section> */}
      
      
    </div>
  );
}

export default App;
