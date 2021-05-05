import React from 'react';
import { sections } from '../config';
import '../assets/styles/sections.scss';

const Sections = (props) => {

  return (
    <div>
    { sections &&
    sections.map(({ data }, index) => (
      <section>
        <div key={index}>
          <h1>{data}</h1>
        </div>
      </section>
    ))}
    </div>
  );
}

export default Sections;
