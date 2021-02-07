import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Cart = () => {
  const products = []

  const totalCost = 0

  return (
    <Container>
      <Row>
        Total:{totalCost}kr
      </Row>

      <Row>
        {products.map((product) => {
        })}

      </Row>
    </Container>
  )

}