import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {useTheme} from '../../ThemeContext';
const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
const themeState = useTheme();
  return (
  <div className={`profile-about ${themeState.dark ? 'bg-dark': 'bg-light'} p-2`}>
    {bio && (
      <Fragment>
        <h2 className='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
        <p>{bio}</p>
        <div className='line' />
      </Fragment>
    )}
    <h2 className='text-primary'>Skill Set</h2>
    <div className='skills'>
      {skills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fa fa-check' /> {skill}
        </div>
      ))}
    </div>
  </div>
);
    }
ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
