import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const CartProductCard = ({ product }) => {
  return (
    <>
      <Row>
        <p>{product.quantity} x </p>
        <p>{product.name}</p>
        <p>{product.price} kr</p>
      </Row>
    </>
  )
}