import React, { useEffect, useState } from 'react';
import images from '../helpers/images';
import {Anchor, Button, Container, Form, Input, Logo, Row, Wrapper } from '../styles';

function Login() {
  const [login, setLogin] = useState({ email: '', password: ''});
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) localStorage
      .setItem('user', JSON.stringify({name: '', email: '', password: ''}));
    console.log(user);
  }, [user])

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const condition = (login.email === user.email) && (login.password === user.password);
    condition
    ? global.alert('Login realizado com sucesso')
    : global.alert('Email ou senha inválidos');
  }

  return (
    <Container>
      <Wrapper>
        <Logo
          src={ images.logo.vertical.src }
          alt={ images.logo.vertical.alt }
        />
        <Form>
          <Input
            type='email'
            placeholder='Email'
            value={ login.email }
            onChange={ (e) => setLogin({ ...login, email: e.target.value}) }
          />
          <Input
            type='password'
            placeholder='Password'
            value={ login.password }
            onChange={ (e) => setLogin({ ...login, password: e.target.value }) }
            />
          <Row>
            <Anchor href='/forgot-password'>Forgot password</Anchor>
            <Anchor href='/register'>Register</Anchor>
          </Row>
        </Form>
      <Button onClick={() => handleLogin()}>Login</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;