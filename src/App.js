import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'


import { Header } from './components/organisms/Header'
import { theme } from './theme'

export const App = () => {
  return (
    <Container>
      <Header theme={theme} />
    </Container>
  )
}
