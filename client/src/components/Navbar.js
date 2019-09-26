import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Menu, } from 'semantic-ui-react';
import { withRouter, Link, } from 'react-router-dom';
import styled from 'styled-components';



class Navbar extends React.Component {
 
  rightNavItems = () => {
    const { auth: { authenticated, handleLogout, }, location, history } = this.props;

    if (authenticated) {
      return (
        <Menu.Menu position="right">
          <Menu.Item 
          style={{color: "white"}}
          name="Logout"
          onClick={() => handleLogout(history)}
          />
          </Menu.Menu>
      )
    } else {
      return ( 
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item 
            style={{color: "white"}}
            name="Login"
            active={location.pathname === "/login"} 
            />
          </Link>
          <Link to="/register">
            <Menu.Item
            style={{color: "white"}}
            name="Register"
            active={location.pathname === "/register"} 
            />
          </Link>
        </Menu.Menu>
      )
    }
  };
  
  
  render() {
    return(
      <Wrapper>
      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item 
          style={{color: "white"}}
          name="MySpace"
          active={this.props.location.pathname === "/"}
          />
        </Link>
        <br />
        <br />
        { this.rightNavItems() }
      </Menu>
      </Wrapper>
    
      );
    };
  };

  const Wrapper = styled.section`
  /* padding: 6em; */
  background:  Black;
`;




const ConnectedNavbar = (props) => (
  <AuthConsumer>
    {auth => (
      <Navbar {...props} auth={auth} />
    )}
  </AuthConsumer>
)


export default withRouter(ConnectedNavbar);