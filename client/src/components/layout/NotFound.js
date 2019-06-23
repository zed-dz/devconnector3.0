import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
    <div className='container-register'>

        <h1 className='x-large text-primary'>
          <i className='fa fa-exclamation-triangle' /> Page Not Found
        </h1>
        <p className='large'>Sorry, this page does not exist</p>
    </div>
    </Fragment>
  );
};

export default NotFound;
