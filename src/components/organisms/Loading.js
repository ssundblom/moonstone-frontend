import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

import { Icon } from '../atoms/Icon'

const StyledContainer = styled(Container)`
  height: 73vh;
`

export const Loading = () => {
  return (
    <StyledContainer className="text-center">
      <Icon className="m-auto h-100" spin icon="hamsa" size="4x" color="var(--dark)" />
    </StyledContainer>
  )
}