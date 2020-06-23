import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../redux/actions/authActions';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';


// Components
import SideMenu from './SideMenu';
import Login from '../auth/login';
import Homepage from '../mainComponens/Map';
import Workers from '../mainComponens/Workers';

function App({ token, getToken }) {
 
  useEffect(() => {
    getToken();
  }, [token])

  return (
    token === '' ? (
      <Login />
    ) : (
      // <Login />
      <Router>
        <SideMenu />
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route path="/workers" component={ Workers } />
        </Switch>
      </Router>
    )
  )
}
const mapStateToProps = (state) => ({
  token: state.authorization.token
})

export default connect(mapStateToProps, { getToken } )(App)