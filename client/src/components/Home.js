import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <div>
      <Header as='h1' textAlign='center'>Home Component</Header>
      <LinkBoxWrapper>
      <LinkBox textalign='center'>
        I Own A Business
      </LinkBox>
      <LinkBox>
        I Lead A team
      </LinkBox>
      <LinkBox>
        I Have An Idea
      </LinkBox>
      </LinkBoxWrapper>
      </div>
    );
  }
}

const LinkBox = styled.div`
height: 450px;
width: 250px;
border: 3px solid black;
`
const LinkBoxWrapper = styled.div`
display: flex;
justify-content: space-around;
flex-content: wrap;
`

export default Home;
