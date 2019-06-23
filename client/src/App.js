import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// import your fontawesome library
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import './darkmode.css';

import styled from "@emotion/styled";


const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  h1, h2, h3, h4, h5, h6, p, td, small {
    color: ${props => props.theme.body};
  }
`;

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Wrapper>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
