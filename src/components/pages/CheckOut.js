import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

const StyledContainer = styled(Container)`
  height: 73vh;
`

export const CheckOut = () => {
  return (
    <StyledContainer>
      <p>Hey there! I'm so happy that you found something in the shop! I really hope in the near future that I'll be able to send your soul goodies to you. Send me an email and I'll let you know as soon as we are up n running</p>
    </StyledContainer>
  )
}