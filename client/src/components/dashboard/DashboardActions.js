import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fa fa-user-circle text-primary' /> Edit Account
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fa fa-black-tie text-primary' /> Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fa fa-graduation-cap text-primary' /> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
