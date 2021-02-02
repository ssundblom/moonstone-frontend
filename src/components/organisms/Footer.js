import React from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const StyledFooter = styled.footer`

`
const StyledRow = styled(Row)`
  height: 100%
`

const StyleContainer = styled(Container)`
  height: 120px;
`

export const Footer = () => {
  return (
    <StyleContainer>
      <StyledRow className="justify-content-center">
        <StyledFooter className="align-self-center">by Sara Sundblom 2021</StyledFooter>
      </StyledRow>
    </StyleContainer>
  )
}