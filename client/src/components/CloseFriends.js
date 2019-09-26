import React from 'react';
import axios from 'axios';
import { Card, Image, Icon, Button, Container, Header } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';


class CloseFriends extends React.Component {
  state = { closeFriends: {}, };

  componentDidMount() {
    axios.get(`/api/close_friends/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ closeFriends: res.data, });
    
    })
    .catch(err => {
      console.log(err)
    })
  };

  // renderCloseFriends({name, post, avatar}) {
  //   const { closeFriends, } = this.state; 
  //   if (closeFriends.length <=0)
  //     return <Header a="h2">Ain't Got None</Header>
  //     return closeFriends.map( closeFriend => (
  //       <Card key={closeFriend.id}>
  //           <Image src={ closeFriend.avatar } />
  //         <Card.Content>
  //           <Card.Header>{ closeFriend.name }</Card.Header>
  //           <br />
  //           <Card.Meta>{ closeFriendriend.post }</Card.Meta>
  //         </Card.Content>
  //         <Card.Content extra>
  //         </Card.Content>
  //       </Card>
  //   }; 
  
  




  render() {
    return(
      <>
      <Container>
//       <br />
//       <Header as="h1" textAlign="center">Friends</Header>
//       <br />
//       <br />
//       <Card.Group itemsPerRow={4} centered>
//         { this.rendercloseFriends() }
//       </Card.Group>
//     </Container>
      </>

    );
  }

};

  // renderCloseFriends() {
  //   const { closeFriends } = this.state;
  //   if (closeFriends.length <=0)
  //   return <Header a="h2">Ain't Got None</Header>
  //   return closeFriends.map( closeFriend => (
  //     <Card key={closeFriend.id}>
  //         <Image src={ closeFriend.avatar } />
  //       <Card.Content>
  //         <Card.Header>{ closeFriend.name }</Card.Header>
  //         <br />
  //         <Card.Meta>{ closeFriendriend.post }</Card.Meta>
  //       </Card.Content>
  //       <Card.Content extra>
  //       </Card.Content>
  //     </Card>
  // }; 

   
//     return(

    
//       <Container>
//       <br />
//       <Header as="h1" textAlign="center">Friends</Header>
//       <br />
//       <br />
//       <Card.Group itemsPerRow={4} centered>
//         { this.rendercloseFriends() }
//       </Card.Group>
//     </Container>
    
      
    
//   };
// };



export default CloseFriends;