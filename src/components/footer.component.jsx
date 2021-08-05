import React from 'react';
import '../assets/styles/footer.scss';
import { socialMedia, email } from '../config';
import Icon from '../utils/icon';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer">
        <div className='social-media'>
          {socialMedia.map(({ url, name }, index) => (
            <a key={index} target='_blank' href={url} rel='noreferrer' aria-label={name}>
              <Icon name={name} />
            </a>
          ))}
        </div>
        <div className='email'>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
