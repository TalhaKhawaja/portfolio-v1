import React from 'react';
import { navLinks } from '../config';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.scss';

const Nav = (props) => {

  return (
    <div>
      <ol>
        {navLinks &&
          navLinks.map(({ url, name }, index) => (
            <li key={index}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default Nav;
