import React from 'react';
import '../assets/styles/sections.scss';
import { sections } from '../config';


const About = () => {
  return (
    <section id='about'>
        {sections &&
          sections.map(({ about }, index) => (
            <section>
              <div key={index}>
                <h1>{about.salutation}, {about.intro}</h1>
                <p>{about.info}</p>
              </div>
            </section>
          ))}
    </section>
  );
}

export default About;