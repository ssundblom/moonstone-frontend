import React from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'

const StyledContainer = styled(Container)`
  height: 73vh;
`

export const About = () => {
  return (
    <StyledContainer>
      <p>Moonstone - my final project for the Technigo bootcamp</p>
    </StyledContainer>
  )
}