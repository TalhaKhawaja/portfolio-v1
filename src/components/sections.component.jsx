import React from 'react';
import { sections } from '../config';
import '../assets/styles/sections.scss';

const Sections = () => {

  return (
    <div>
      { sections &&
        sections.map(({ name, data }, index) => (
          <section>
            <div key={index}>
              <h1>{name}</h1>
              <p>{data}</p>
            </div>
          </section>
        ))}
    </div>
  );
}

export default Sections;
