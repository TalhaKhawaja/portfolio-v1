import React from 'react'
import About from '../sections/about.section';
import Experience from '../sections/experience.section';
import Projects from '../sections/projects.section';
import Contact from '../sections/contact.section';
import '../assets/styles/body.scss'

const Body = () => {
  return (
    <div className="body">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default Body;
