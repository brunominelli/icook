
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
`;

const Logo = styled.img `
  width: 100%;
`;

const Button = styled.button `
  background-color: ${palette.accent};
  border: none;
  border-radius: 0.8rem;
  color: ${palette.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.5rem;
  padding: 1.5rem;
  width: 100%;
`;

export {
  Container,
  Wrapper,
  Logo,
  Button,
};