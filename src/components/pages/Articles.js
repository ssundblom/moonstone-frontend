import React from 'react'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
  height: 73vh;
`

export const Articles = () => {
  return (
    <StyledContainer>
      <p>Nothing here just yet but stay tuned! </p>
    </StyledContainer>
  )
}