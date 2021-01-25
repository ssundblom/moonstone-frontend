import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import 'theme.css'

import { Header } from './components/organisms/Header'
import { Home } from './components/pages/Home'
import { Shop } from './components/pages/Shop'
import { Articles } from './components/pages/Articles'
import { About } from './components/pages/About'

export const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </Container>
  )
}
