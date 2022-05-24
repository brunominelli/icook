import React, { useContext, useEffect, useState } from 'react'
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import Context from '../context/context';
import images from '../helpers/images';
import { Button, Container, Form, Input, Logo, Wrapper } from '../styles';

function Register() {
  const [register, setRegister] = useState({ name: '', email: '', password: ''})
  const [disabled, setDisabled] = useState(true);
  const { setUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const { name, email, password } = register;
    const isEmail = validator.isEmail(email);
    const condition = !!name && isEmail && password.length > 6;
    
    if (condition) setDisabled(false);
    else setDisabled(true);

  }, [disabled, register])

  const handleRegister = () => {
    const {name, email, password} = register;
    const json = JSON.stringify({ name, email, password });
  
    setUser({name, email, password})
    localStorage.setItem('user', json);
    global.alert("Usuário cadastrado com sucesso");
    navigate('/login');
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
          type='text'
          placeholder='Name'
          value={register.name}
          onChange={ (e) => setRegister({...register, name: e.target.value })}
        />
        <Input
          type='email'
          placeholder='Email'
          value={register.email}
          onChange={ (e) => setRegister({...register, email: e.target.value })}
        />
        <Input
          type='password'
          placeholder='Password'
          value={register.password}
          onChange={ (e) => setRegister({...register, password: e.target.value })}
        />
      </Form>
        <Button type='button' disabled={ disabled } onClick={ () => handleRegister()}>Register</Button>
      </Wrapper>
    </Container>
  )
};

export default Register;