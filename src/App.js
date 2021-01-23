import React from 'react'
import styled from 'styled-components/macro'

import { Header } from './components/organisms/Header'

const HeaderContainer = styled.div`
  display: flex;
  margin: auto;

`
export const App = () => {
  return (
    <HeaderContainer>
      <Header />
    </HeaderContainer>
  )
}
