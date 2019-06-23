import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getCurrentProfile } from './../../actions/profile';

import { useTheme } from "../../ThemeContext";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout, getCurrentProfile, profile: {profile}
}) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const themeState = useTheme();

  // let userId = 'me'
  // if(isAuthenticated) userId = user._id

  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'> Developers</Link>
      </li>
        <li>
      {/* <Link to={`/profile/${userId}`}>
       View Profile
      </Link> */}
       </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fa fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fa fa-sign-out' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    // <div>
    <nav className='navbar bg-dark'>
      <div className='toggle-container'>
      <span style={{ color: themeState.dark ? "grey" : "yellow" }}>☀︎</span>
        <span className='toggle'>
          <input onChange={() => themeState.toggle()}
              checked={themeState.dark}
              id="checkbox"
              className="checkbox"
              type="checkbox" />
            <label htmlFor="checkbox" />
            {/* {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"} */}
        </span>
        <span style={{ color: !themeState.dark ? "slateblue" : "#ffc" }}>☾</span>
      </div>

      <h1 className='devconnect'>
        <Link to='/'>
          <i className='fa fa-code' /> DevConnector
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>

  // </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { logout, getCurrentProfile }
)(Navbar);
