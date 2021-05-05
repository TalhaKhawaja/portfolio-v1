import React from 'react';
import { navLinks } from '../config';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.scss';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Nav = (props) => {

  return (
    <div>
      <ol>
        {navLinks &&
          navLinks.map(({ url, name }, index) => (
            <li className='nav-items' key={index}>
              <ArrowRightAltIcon className='arrow-icon'></ArrowRightAltIcon>
              <Link to={url}>{name}</Link>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default Nav;
