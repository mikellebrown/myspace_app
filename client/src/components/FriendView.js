import React from 'react';
import axios from 'axios';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

class FriendView extends React.Component {
  state = { friend: {}, };

  componentDidMount() {
    axios.get(`/api/friends/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ friend: res.data, });
      
      })
      .catch(err => {
        console.log(err)
      })
      
  }

  addCloseFriend() {
      axios.put(`/api/friends/${this.props.match.params.id}`)
      .then( res => {
      this.props.history.push(`/close_friends`);
    })
    .catch(err => {
      console.log(err);
    })
  };

  // const upVote = (id) => {
  //   axios.put(`/api/cats/${id}`)
  //     .then( res => setCats(cats.filter( c => c.id !== id)))
  // };
  render() {
    const { name, post, avatar } = this.state.friend;
    return(
      <>
      <br />
      <br />
      <br />
     <Card centered>
      <Image src={ avatar } />
        <Card.Content>
          <Card.Header>{ name }</Card.Header>
          <br />
          <Card.Meta>{ post }</Card.Meta>
          <br />
          <Card.Content extra>
           <Button as={Link} to={"/"} color="green" icon basic  >
                <Icon name="hand point left outline" />
           </Button>
          <Button onClick={() => this.addCloseFriend()} color="red" icon basic  >
                <Icon name="heart" />      
           </Button>
           <Button as={Link} to={"/close_friends"} color="green" icon basic  >
             View Close Friends
           </Button>
          </Card.Content>
        </Card.Content>
      </Card>
      </>
    );
  };
};


export default FriendView;