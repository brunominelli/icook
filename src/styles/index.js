import palette from './palette';
import styled from 'styled-components';

const Container = styled.main `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.secondary};
  margin: auto;
  width: 100vw;
  height: 83.75vh;
`;

const Wrapper = styled.article `
  display: flex;
  flex-direction: column;
  background-color: ${palette.secondary};
  align-items: center;
  justify-content: center;
  color: ${palette.accent};
  margin: auto;
  width: 90vw;

  & > a {
    margin: 1rem;
    text-align: center;
    text-decoration: none;
    color: ${palette.accent};
    font-size: 1.5rem;
    font-weight: 700;
    width: 50vw;
  }

  & > a > img {
    width: 5rem;
  }

  & > section {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 3rem;
    width: 100%;
  }

  & > h1 {
    border-top: 0.0625rem solid ${palette.accent};
    border-bottom: 0.0625rem solid ${palette.accent};
    font-size: 1.5rem;
    text-align: center;
    line-height: 3rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  @media screen and (min-width: 576px) {
    width: 100vw;
  };
`;

const Row = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.5rem 0;
  width: 100%;

  & > a {
    margin: 1rem;
    text-align: center;
    text-decoration: none;
    color: ${palette.accent};
    font-size: 1.5rem;
    font-weight: 700;
    width: 50vw;
  }

  & > a > img {
    width: 5rem;
  }
`;

const Anchor = styled.a `
  color: ${palette.accent};
  text-decoration: underline;
`;
  
const Header = styled.header `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.secondary};
  padding: 0.25rem 0.5rem;
  width: 100vw;

  & > img {
    width: 7.5rem;
    max-width: 10rem;
  };

  & > div > a > img {
    margin: 0.5rem;
    width: 1.5rem;
  }
`;

const Footer = styled.footer `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.secondary};
  padding: 0.25rem 0.5rem;
  position: fixed;
  bottom: 0;
  width: 100vw;

  & > a > img {
    margin: 0.5rem;
    width: 1.5rem;
  }
`;

const Logo = styled.img `
  min-width: 10%;
  max-width: 100%;
`;

const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input `
  border: 0.0625rem solid ${palette.accent};
  border-radius: 0.25rem;
  color: ${palette.accent};
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  transition: 1s;
  width: 100%;

  &:disabled {
    display: none;
  }
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
  transition: 1s;

  &:disabled {
    background-color: ${palette.primary};
    color: ${palette.accent};
  }
`;

const Figure = styled.figure `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${palette.accent};
  border: 0.0625rem solid ${palette.accent};
  color: ${palette.secondary};
  border-radius: 0.8rem;
  padding: 0.5rem;
  margin: 0.25rem;
  text-align: center;
  transition: 0.5s;
  width: 47.5%;

  & > figcaption > h3 {
    font-size: 1rem;
    padding: 0.5rem;
  }

  & > img {
    border-radius: 0.8rem;
    width: 100%;
  }

  &:hover {
    background-color: ${palette.primary};
    border: 0.0625rem solid ${palette.primary};
    color: ${palette.accent}
  }

  @media screen and (min-width: 576px) {
    width: 18.75%;
    min-height: 11rem;
  };
`;

export {
  Container,
  Wrapper,
  Row,
  Header,
  Footer,
  Logo,
  Form,
  Input,
  Anchor,
  Button,
  Figure,
};