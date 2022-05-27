import React from 'react'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import { Container, Wrapper } from '../styles'

function Favorites() {
  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <div>Favorites</div>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  )
}

export default Favorites