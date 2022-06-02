import React from 'react';
import { Button, Container, Form, Logo, Wrapper } from '../styles';
import images from '../helpers/images';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Logo
          src={ images.logo.vertical.src }
          alt={ images.logo.vertical.alt }
        />
        <Form>
          <Button onClick={ () => navigate('/login') }>Login</Button>
          <Button onClick={ () => navigate('/register')} >Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Home;
