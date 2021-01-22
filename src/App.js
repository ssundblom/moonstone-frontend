import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;

`
const Header = styled.div`
  font-size: 20px;
  color: #6C6C5D;

`
export const App = () => {
  return (
    <HeaderContainer>
      <Header>
        WELCOME TO MOONSTONE!
      </Header>
    </HeaderContainer>
  )
}
