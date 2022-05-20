import palette from './palette';
import styled from 'styled-components';

const Container = styled.main `
  display: flex;
  background-color: ${palette.secondary};
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.primary}
  padding: 10rem;
  margin: 0 auto;
  width: 75vw;

  @media screen and (min-width: 576px) {
    width: 30vw;
  };
`;

const Row = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.5rem 0;
  width: 100%;
`;

const Logo = styled.img `
  width: 75%;
  max-width: 20rem;
`;

const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%
`;

const Input = styled.input `
  border: 0.0625rem solid ${palette.accent};
  border-radius: 0.25rem;
  color: ${palette.accent};
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  width: 100%;
`;

const Anchor = styled.a `
  color: ${palette.accent};
  text-decoration: underline; 
`;

const Button = styled.button `
  background-color: ${palette.accent};
  border: none;
  border-radius: 0.25rem;
  color: ${palette.secondary};
  font-weight: 700;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  margin: 0.25rem 1rem;
  width: 100%;
`;

export {
  Container,
  Wrapper,
  Row,
  Logo,
  Form,
  Input,
  Anchor,
  Button,
};