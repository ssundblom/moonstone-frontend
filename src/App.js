import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import 'bootstrap/dist/css/bootstrap.css'
import 'theme.css'

import { Header } from './components/organisms/Header'
import { Home } from './components/pages/Home'
import { Shop } from './components/pages/Shop'
import { Articles } from './components/pages/Articles'
import { About } from './components/pages/About'
import { Product } from './components/pages/Product'
import { CreateMix } from './components/pages/CreateMix'
import { Cart } from './components/pages/Cart'
import { CheckOut } from './components/pages/CheckOut'
import { Footer } from './components/organisms/Footer'

import { cart } from './reducers/cart'

const reducer = combineReducers({
  cart: cart.reducer
})

const persistedStateJson = localStorage.getItem('moonstoneCart')
let persistedState = {}

if (persistedStateJson) {
  persistedState = JSON.parse(persistedStateJson)
}

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  localStorage.setItem('moonstoneCart', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <CloudinaryContext cloudName="moonstone-space">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/create-mix" component={CreateMix} />
            <Route path="/shop/:productId" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/articles" component={Articles} />
            <Route path="/about" component={About} />
            <Route path="/checkout" component={CheckOut} />
          </Switch>
          <Footer />
        </Router>
      </CloudinaryContext>
    </Provider>
  )
}