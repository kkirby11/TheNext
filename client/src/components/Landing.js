import React, { Component } from 'react';
import {
  Grid,
  Image,
  Divider,
  Container,
  Form,
  Button,
  Input,
} from 'semantic-ui-react';
import styled from 'styled-components';
import Footer from './Footer';

class Landing extends Component {
  render() {
    return (
      <div>
        {/* <Grid > */}
        <Grid.Row>
          <Grid.Column mobile={4} computer={16}>
            <MainHeader>
              <ImageDiv>
                <div >
                  <Headerr>Welcome to TheNext!</Headerr>
                  <HeaderTwo>Bridging the Gap between Perception and Reality</HeaderTwo>
                </div>
              </ImageDiv>
              {/* <ImageContainer>
              <Image src={MePhoto} size='medium' rounded floated='right'  />
              </ImageContainer> */}
              <Divider hidden />
            </MainHeader>
          </Grid.Column>
        </Grid.Row>
        <EmailWrapper>
          <EmailHeader>Sign Up for Exclusive Content Before our Launch Date!</EmailHeader>
          <FormStyle>
          <Form size="large">
          <Form.Group >
            <Form.Field
              id='form-input-control-email'
              control={Input}
              placeholder= 'email@email.com' width={12}
            />
            <Form.Field
              id='form-button-control-public'
              control={Button}
              content='Join TheNext'
            />
          </Form.Group>
          </Form>
          </FormStyle>
        </EmailWrapper>
        {/* <Divider hidden/> */}
        <Wrapper>
          <SecondHeader>#WhatsYourNext</SecondHeader>
          <Paragraph>The Next is a business solution tool that will provide networking, funding, resources, and education to empower protected classes to get to "their next." - Kristina Kirby</Paragraph>
        </Wrapper>
        <TestWrapper>
          <ThirdHeader>Our Committment To You</ThirdHeader>
        </TestWrapper>
        <Container >
          <Preview picture={'https://images.unsplash.com/photo-1523430237819-5fdfeb4f5604?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f5314a7fa18a4ec6909d4cbda5687ada&auto=format&fit=crop&w=1274&q=80'}>
            <PreviewText>
              <h1>Financial Incentives & Creation of Economic Opportunity</h1>
            </PreviewText>
          </Preview>
          <Divider hidden />
          <Preview picture={'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2562d07e189d92150c0b24ee243c5af2&auto=format&fit=crop&w=800&q=60'}>
            <PreviewText>
              <h1>Technology/Infrastructure & Capability/Skill Building</h1>
            </PreviewText>
          </Preview>
          <Divider hidden />
          <Preview picture={'https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fce4ce8856a711cc50a14e03e58783a&auto=format&fit=crop&w=800&q=60'}>
            <PreviewText>
              <h1>Advocacy, Laws, Policies, and Regulations</h1>
            </PreviewText>
          </Preview>
        </Container>
        <Divider hidden />
        <Footer />
        {/* </Grid> */}
      </div>
    )
  }
}

const MainHeader = styled.div`
  background-image: url(https://images.unsplash.com/photo-1527234639945-70d78416bd7d?ixlib=rb-0.3.5&s=a9ebd4e986e2f1c37d371c511d9515a4&auto=format&fit=crop&w=1438&q=80);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  height: 700px;
  `

const Headerr = styled.h1`
  position: absolute;
  left: 25%;
  top: 5%;
  text-align: center;
  padding-top: 70px;
  font-size: 75px;
  color: white;
  font-family: 'Crete Round', serif;
  `
const HeaderTwo = styled.h3`
    position: absolute;
    left: 15%;
    top: 15%;
    text-align: center;
    padding-top: 70px;
    font-size: 45px;
    color: white;
    font-family: 'Crete Round', serif;
  `

const SecondHeader = styled.div`
  position: absolute;
  text-align: center;
  font-size: 75px;
  padding-top: 690px;
  color: black;
  font-family: 'Crete Round', serif;
  left: 2%;
  top: 46%;
`
const ThirdHeader = styled.div`
  position: absolute;
  text-align: center;
  font-size: 65px;
  color: black;
  font-family: 'Crete Round', serif;
  left: 24%;
  top: 205%;
`
const EmailHeader = styled.div`
  position: absolute;
  text-align: center;
  font-size: 45px;
  color: black;
  font-family: 'Crete Round', serif;
  left: 10%;
  top: 112%;
`
const EmailWrapper = styled.div`
  background-color: #EF5D60;
  height: 200px;
`

const Paragraph = styled.h1`
  font-family: 'Crete Round', serif;
  // text-align: center;
  padding-left: 40px;
  padding-right: 20px;
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 450px;
  background-color: #E3E1E0;
`

const TestWrapper = styled.div`
  background-color: white;
  height: 110px;
`

const ImageContainer = styled.div`
  // display: flex;
  padding-right: 250px;
  padding-top: 50px;
  // align-content: center;
  // border-radius: 35px;
`
const ImageDescription = styled.div`
  color: red;
`
const ImageDiv = styled.div`
  padding: 100px; 
  align-content: center;
`

const Preview = styled.div`
  background-image: url(${props => props.picture});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; 
  flex: 1;
  flex-basis: 200px;
  height: 350px;
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
const PreviewText = styled(Preview)`
  color: transparent;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding=right: 50px
`

const FormStyle = styled.div`
  // align-items: center;
  padding-left: 600px;
  padding-top: 125px;
  // display: flex;
`

export default Landing;