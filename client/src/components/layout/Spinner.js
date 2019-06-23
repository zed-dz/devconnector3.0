import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
  <div className='container-register'>

      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt='Loading...'
      />
  </div>
  </Fragment>
);
