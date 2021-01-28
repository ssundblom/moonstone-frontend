import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { CloudinaryContext } from 'cloudinary-react'

import 'bootstrap/dist/css/bootstrap.css'
import 'theme.css'

import { Header } from './components/organisms/Header'
import { Home } from './components/pages/Home'
import { Shop } from './components/pages/Shop'
import { Articles } from './components/pages/Articles'
import { About } from './components/pages/About'
import { Product } from './components/pages/Product'
import { CreateMix } from './components/pages/CreateMix'

export const App = () => {
  return (
    <CloudinaryContext cloudName="moonstone-space">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/create-mix" component={CreateMix} />
            <Route path="/shop/:productId" component={Product} />
            <Route path="/articles" component={Articles} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
    </CloudinaryContext>
  )
}
