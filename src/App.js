import React from 'react'
import styled from 'styled-components/macro'

import { Header } from './components/organisms/Header'

const HeaderContainer = styled.div`
  display: flex;
  margin: auto;

`
const HeaderTwo = styled.div`
  font-size: 20px;
  color: #6C6C5D;
`
export const App = () => {
  return (
    <HeaderContainer>
      <Header />
    </HeaderContainer>
  )
}
