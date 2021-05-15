import React from 'react';
import '../assets/styles/footer.scss';
import { socialMedia, email } from '../config';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <div className="footer">
      <div className='social-media'>
        {socialMedia.map((sm, index) => (
          <a key={index} target='_blank' href={sm.url} rel='noreferrer'>
            {sm.name === 'LinkedIn' ? <LinkedInIcon className='icon' /> : sm.name === 'GitHub' ? <GitHubIcon className='icon' /> : ''}
          </a>
        ))}
      </div>
      <div className='email'>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
}

export default Footer;
