import React from 'react'
import images from '../helpers/images';
import { Button, Container, Form, Input, Logo, Wrapper } from '../styles';

function Register() {
  return (
    <Container>
      <Wrapper>
        <Logo
          src={ images.logo.vertical.src }
          alt={ images.logo.vertical.alt }
        />
      <Form>
        <Input type='text' placeholder='Name' />
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
      </Form>
        <Button>Sing In</Button>
      </Wrapper>
    </Container>
  )
};

export default Register;