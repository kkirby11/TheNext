import React, { Component } from 'react';
import { Header, Image, FeedDate } from 'semantic-ui-react';
import styled from 'styled-components';
import Footer from './Footer'


class Home extends Component {
  render() {
    return (
      <div>
      <Header as='h1' textAlign='center'>Home Component</Header>
      <LinkBoxWrapper>
      <LinkBox textalign='center'>
      <Image height='300px' width='400px' src='https://images.unsplash.com/photo-1523430237819-5fdfeb4f5604?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f5314a7fa18a4ec6909d4cbda5687ada&auto=format&fit=crop&w=1274&q=80' />
        I Own A Business
      </LinkBox>
      <LinkBox>
      <Image height='300px' width='400px' src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2562d07e189d92150c0b24ee243c5af2&auto=format&fit=crop&w=800&q=60' />
        I Lead A team
      </LinkBox>
      <LinkBox>
      <Image height='300px' width='400px' src='https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fce4ce8856a711cc50a14e03e58783a&auto=format&fit=crop&w=800&q=60'/>
        I Have An Idea
      </LinkBox>
      </LinkBoxWrapper>
      <Footer />
      </div>
    );
  }
}

const LinkBoxWrapper = styled.div`
display: flex;
justify-content: space-around;
flex-content: wrap;
`
const LinkBox = styled.div`
  background-image: url(${props => props.picture});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  flex: 1;
  flex-basis: 200px;
  height: 350px;
  padding: 15px;
  display: flex;
  text-align: center;
  color: transparent;
  flex-direction: column;
  justify-content: space-around;


  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
   
  }
`

export default Home;
