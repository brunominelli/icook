import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/context';
import images from '../helpers/images';
import { Button, Container, Form, Input, Logo, Wrapper } from '../styles';

function ForgotPassword() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const [recover, setRecover] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(true);

  const handleDisabled = (email) => {
    if (email === user.email) {
      setDisabled(false);
      setRecover({ ...recover, email });
    } else setDisabled (true);
  };

  const handleRecoverClick = ({ email, password }) => {
    if (password.length > 6) {
      setUser({...user, email, password });
      localStorage.setItem('user', JSON.stringify({...user, email, password }));
      global.alert('Nova senha cadastrada com sucesso!');
      navigate('/login');
    } else global.alert('A senha deve possuir pelo manoe 7 caracteres.');
  };

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
          onChange={ (e) => handleDisabled(e.target.value) }
        />
        <Input
          type='password'
          placeholder='New Password'
          value={ recover.password }
          onChange={ (e) => setRecover({...recover, password: e.target.value}) }
          disabled={ disabled }
        />
      </Form>
        <Button
          type='button'
          disabled={ disabled }
          onClick={ () => handleRecoverClick(recover) }
        >
          Recover Password
        </Button>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;
