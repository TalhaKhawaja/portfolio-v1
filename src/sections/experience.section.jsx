import React from 'react';
import '../assets/styles/sections.scss';
import { sections } from '../config'

const Experience = () => {
  return (
    <section id='experience'>
      {sections &&
        sections.map(({ experience }, index) => (
          <div key={index}>
            {experience &&
              experience.map(({ startDate, endDate, jobTitle, employer, city, description }, i) => (
                <div key={i}>
                  <h2>{jobTitle} at {employer}, {city}</h2>
                  <h3>{startDate} - {endDate}</h3>
                  <ul>
                    {description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
    </section>
  );
}

export default Experience;