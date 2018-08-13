import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Form } from 'semantic-ui-react';
import styled from 'styled-components';
// import Footer from './Footer';

class ContactsForm extends Component {
    initialState = {
        first_name: '',
        last_name: '',
        subject: '',
        email: '',
        phone: '',
        message: '',
    }

    state = {...this.initialState}

    render() {
        const {
            subject,
            first_name,
            last_name,
            email,
            phone,
            message,
        } = this.state;

        const subjectOptions = [
            { key: 'g', text: 'General Question', value: 'General_Question', name: 'General_Question'},
            { key: 'j', text: 'Joining our Organization Question', value: 'Joining Our Organization Question', name: 'Joining Our Organization Question'},
            { key: 't', text: 'Tell Us Your Story', value: 'Tell_Us_Your_Story', name: 'Tell_Us_Your_Story'},
            { key: 'r', text: 'Recommend our Staff or Services', value: 'Recommendation_Our_Staff_Or_Services', name: 'Recommendation_Our_Staff_Or_Services'},
        ]
    return(
        <div>
            <MainHeader></MainHeader>
            <TopHeader as="h1" textAlign='center' fontFamily='Josefin Slab'>Contact Us</TopHeader>
        <Container>
          <Form onSubmit={this.handleSubmit}>    
            <Form.Field widths='equal'>
              <label htmlFor='contact'></label>
              <Form.Group widths='equal'>
                <Form.Dropdown
                  value={subject}
                  selection
                  label="Subject"
                  options={subjectOptions}
                  placeholder="Subject"
                  onChange={this.handleSubjectChange} 
                />
                <Form.Input 
                  fluid label='First name' 
                  placeholder='First name' 
                  id="first_name"
                  name="first_name"
                  autoComplete="given-name"                        
                  value={first_name} 
                  onChange={this.handleChange}
                />
                <Form.Input 
                  fluid label='Last name' 
                  placeholder='Last name'
                  id='last_name' 
                  name='last_name'
                  autoComplete='family-name'
                  value={last_name} 
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  fluid label='Email' 
                  id='email' 
                  name="email"
                  autoComplete="email" 
                  placeholder='email' 
                  value={email} 
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid label='Phone' 
                  id='phone' 
                  name="phone"
                  autoComplete='tel-national' 
                  placeholder='xxx-xx  ' 
                  value={phone} 
                  onChange={this.handleChange}
                />
                </Form.Group>
              <Form.TextArea 
                fluid label='Message'
                placeholder='Tell us more about ...' 
                id='message' 
                name='message'
                autoComplete='message'
                value={message} 
                onChange={this.handleChange}
              />            
              <Button
                positive
                type="submit" 
                value="Submit">
                Submit
              </Button>                   
            </Form.Field>
            </Form> 
            </Container>
            {/* <Footer /> */}
        </div>
        )
    }
}


const MainHeader = styled.div`
    background-image: url(https://images.unsplash.com/photo-1530611035471-1b4ac1f1ebfd?ixlib=rb-0.3.5&s=000e8153762e2f7b59b914380715afdd&auto=format&fit=crop&w=1502&q=80);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat; 
    height: 400px;
    text-align: center;
    display: flex;
    overflow: scroll;
    `;
const TopHeader = styled.h1`
  text-align: center;
`

export default connect()(ContactsForm);