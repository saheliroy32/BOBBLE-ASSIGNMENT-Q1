import React from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    
    <Form className="signup-form">
    <h1 className="text-center">SIGN UP </h1>
    <h2> Create your account </h2>
    <FormGroup>
    <GoogleLoginButton className="mt-3 mb-3"/>
    <FacebookLoginButton className="mt-3 mb-3"/>
    <h3 className="text-center">--------OR---------</h3>
      <Label>First Name</Label>
      <Input type="Name" placeholder="First Name"/>

    </FormGroup> 
    <FormGroup>
      <Label>Last Name</Label>
      <Input type="Name" placeholder="Last Name"/>
    </FormGroup> 
    <FormGroup>
      <Label> Email Address</Label>
      <Input type="email" placeholder="Email Address"/>

    </FormGroup> 
    <FormGroup>
      <Label>Password</Label>
      <Input type="password" placeholder="Password"/>

    </FormGroup> 
    
    <div className="text-center pt-3">
    By clicking Sign Up,you agree to our Terms of Use and our Privacy Policy.
    </div>

    <Button className="btn btn-info btn-lg btn-block" type="submit" value="Submit">
      SIGN UP
    </Button>

    </Form>

      
    
  );
}

export default App;
