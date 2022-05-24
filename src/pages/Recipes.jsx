import React from 'react';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import { Wrapper } from '../styles';

function Recipes() {
  return (
    <>
      <AppHeader />
        <Wrapper>
          <section>
            <h1>Recomended Meals</h1>
          </section>
          <section>
            <h1>Recomended Coctails</h1>
          </section>
        </Wrapper>
      <AppFooter />
    </>
  );
};

export default Recipes;
