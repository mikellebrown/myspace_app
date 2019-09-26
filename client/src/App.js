import React from 'react';
import './App.css';
import { Container, } from 'semantic-ui-react';
import { Switch, Route, }  from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import FriendView from './components/FriendView';
import CloseFriends from './components/CloseFriends';
import ProtectedRoute from './components/ProtectedRoute';




const App = () => (
  <>
  <Navbar />
  <Container>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/friends/:id" component={FriendView} />
      <ProtectedRoute exact path="/close_friends" component={CloseFriends} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
  </>
);





export default App;
