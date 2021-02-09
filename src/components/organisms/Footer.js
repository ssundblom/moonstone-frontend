import React from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

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
        <footer className="text-center align-self-center">
          <Image src={`${process.env.PUBLIC_URL}/favicon-16x16.png`} /><br />
           by Sara Sundblom 2021
        </footer>
      </StyledRow>
    </StyleContainer>
  )
}