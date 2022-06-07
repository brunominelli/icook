import React, { useContext, useEffect, useState } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import { Block, Container, Wrapper } from '../../styles';

function Cocktails() {
  const { cocktails } = useContext(Context);

  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Block>
            {cocktails.map((cocktail, index) =>
              index < 24 && <AppCard
                key={ cocktail.idDrink }
                id={ cocktail.idDrink }
                title={ cocktail.strDrink }
                thumb={ cocktail.strDrinkThumb }
                type='cocktails'
              />
            )}
          </Block>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default Cocktails;
