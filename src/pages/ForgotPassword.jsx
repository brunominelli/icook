import React from 'react';
import images from '../helpers/images';
import { Button, Container, Form, Input, Logo, Wrapper } from '../styles';

function ForgotPassword() {
  return (
    <Container>
      <Wrapper>
        <Logo
          src={ images.logo.vertical.src }
          alt={ images.logo.vertical.alt }
        />
      <Form>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='New Password'/>
      </Form>
        <Button>Recover Password</Button>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;
