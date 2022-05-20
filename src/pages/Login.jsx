import React from 'react';
import images from '../helpers/images';
import { Anchor, Button, Container, Form, Input, Logo, Row, Wrapper } from '../styles';

function Login() {
  return (
    <Container>
      <Wrapper>
        <Logo
          src={ images.logo.vertical.src }
          alt={ images.logo.vertical.alt }
        />
        <Form>
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <Row>
            <Anchor>Forgot password</Anchor>
            <Anchor>Register</Anchor>
          </Row>
        </Form>
      <Button>Login</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;