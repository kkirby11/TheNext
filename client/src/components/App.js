import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import ContactsForm from './ContactsForm';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
        <PaddedDiv>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={ContactsForm} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
          </PaddedDiv>
        </FetchUser>
      </div>
    );
  }
}


const PaddedDiv = styled.div`
  padding-top: 25px;
`


export default App;
