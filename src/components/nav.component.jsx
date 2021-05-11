import React from 'react';
import { navLinks } from '../config';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.scss';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { smoothScroll } from '../utils/utils.js'

const Nav = () => {
  return (
    <div>
      <ol>
        {navLinks &&
          navLinks.map(({ url, name }, index) => (
            <li className='nav-items' key={index}>
              <ArrowRightAltIcon className='arrow-icon'></ArrowRightAltIcon>
              <Link onClick={() => smoothScroll(name)} to={url}>{name}</Link>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default Nav;
