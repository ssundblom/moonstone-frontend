import React from 'react'
import { useSelector } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { cart } from '../../reducers/cart'
import { CartProductCard } from '../organisms/CartProductCard'

export const Cart = () => {
  const products = useSelector((store) => store.cart.items)

  const totalCost = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <Container>

      <Row>
        {products.map((product) => {
          return (
            <CartProductCard product={product} />
          )
        })}
      </Row>
      <Row>
        Total:{totalCost}kr
      </Row>
    </Container>
  )
}