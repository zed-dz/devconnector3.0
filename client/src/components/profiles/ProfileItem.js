import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useTheme } from "../../ThemeContext";

const ProfileItem = ({
  profile: {
    user: { _id, name, email, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  const themeState = useTheme();

  return (
    <div className={`profile ${themeState.dark ? 'bg-dark' : 'bg-light'}`}>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
          <a href={`mailto:${email}`} className='btn btn-primary'>
          email
        </a>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fa fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
