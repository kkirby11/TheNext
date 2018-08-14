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
import Footer from './Footer';
import {
  MainHeader,
  Headerr,
  HeaderTwo,
  SecondHeader,
  ThirdHeader,
  EmailHeader,
  EmailWrapper,
  Paragraph,
  Wrapper,
  TestWrapper ,
  ImageDiv,
  Preview,
  PreviewText,
  FormStyle
}  from './StyledLinks';

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
        {/* <Divider hidden/> */}
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

export default Landing;