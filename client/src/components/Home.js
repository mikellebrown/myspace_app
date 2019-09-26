import React from 'react';
import { Card, Header, Image, Container, Icon, Button, } from 'semantic-ui-react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
// import styled from 'styled-components';


class Home extends React.Component {
  state = { friends: [], };

     
  componentDidMount() {
    axios.get("/api/friends")
      .then( res => {
        this.setState({ friends: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  renderFriends = () => {
    const { friends, } = this.state;
    if (friends.length <=0)
    return <Header a="h2">Ain't Got None</Header>
    return friends.map( friend => (
      <Card key={friend.id}>
          <Image src={ friend.avatar } />
        <Card.Content>
          <Card.Header>{ friend.name }</Card.Header>
          <br />
          <Card.Meta>{ friend.post }</Card.Meta>
        </Card.Content>
        <Card.Content extra>
        <Button as={Link} to={`/friends/${friend.id}`} color="green" icon basic  >
                <Icon name="hand point right outline" />
           </Button>
        </Card.Content>
      </Card>
    ))
  }
  render() {

    return(
      <Container>
        <br />
        <Header as="h1" textAlign="center">Friends</Header>
        <br />
        <br />
        <Card.Group itemsPerRow={4} centered>
          { this.renderFriends() }
        </Card.Group>
      </Container>
    );
  };
};

// // const Wrapper = styled.section`
// //   padding: 4em;
// //   background: lightgreen;
// // `;
export default Home;