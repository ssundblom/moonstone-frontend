import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


import { CartProductCard } from '../organisms/CartProductCard'

const TotalText = styled.p`
  margin-block-end: 0;
`

export const Cart = () => {
  const products = useSelector((store) => store.cart.items)

  const totalCost = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <Container>
      <Row xs="1" className="justify-content-center">
        {products.map((product) => {
          return (
            <CartProductCard key={product._id} product={product} />
          )
        })}
      </Row>
      <Row xs="2" className="justify-content-center">
        <Col className="text-right  my-auto"><TotalText>Total: {totalCost}kr</TotalText></Col>
        <Col>
          <Link to="/checkout">
            <Button variant="dark">Checkout!</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}