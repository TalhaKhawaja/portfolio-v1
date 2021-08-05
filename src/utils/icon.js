import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Icon = ({ name, classname }) => {
  switch (name) {
    case 'GitHub':
      return <GitHubIcon className='icon' />;
    case 'LinkedIn':
      return <LinkedInIcon className='icon' />
    default:
      return null;
  }
};

export default Icon;