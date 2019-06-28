import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  const [Search, setSearch] = useState({
    search: ''
  });

  const { search } = Search;

  let filteredProfiles = profiles.filter(profile => profile.user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);

const updateSearch = event =>
      setSearch({ ...Search, search: event.target.value.substr(0, 30) });

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
            <h1 className='large text-primary'>Developers</h1>
            <p className='lead'>
              <i className='fa fa-connectdevelop' /> Browse and connect with
              developers
            </p>

                <div className="search__container">
                    <p className="search__title">
                        search profiles
                    </p>
             <input type='text' onChange={updateSearch.bind(this)} value={search} className="search__input" placeholder="search profiles" />
                </div>
              <div className='profiles'>
                  {filteredProfiles.map(profile => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))
                }
              </div>

            <div className='hidden'>
              {profiles.length > 0 ? (
                profiles.map(profile => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
        <div className='container-register'>
                <h4>No profiles found...</h4>
        </div>
              )}
            </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
