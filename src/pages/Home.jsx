import React from 'react';
import { Button, Container, Logo, Wrapper } from '../styles';
import images from '../helpers/images';

function Home() {
  return (
    <Container>
      <Wrapper>
        <Logo
          src={ images.logo.vertical.src }
          alt={ images.logo.vertical.alt }
        />
        <Button>Login</Button>
        <Button>Register</Button>
      </Wrapper>
    </Container>
  );
};

export default Home;
