import React from 'react';
import '../assets/styles/sections.scss';
import { about } from '../config';


const About = () => {
  const { additionalInfo, info, intro, salutation } = about;

  return (  
    <section id='about'>
      <section>
        <div>
          <h1>{salutation}, {intro}</h1>
          <p>{info}</p>
          <p>{additionalInfo}</p>
        </div>
      </section>
    </section>
  );
}

export default About;