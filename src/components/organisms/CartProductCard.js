import React from 'react'
import { useDispatch } from 'react-redux'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { LinkContainer } from 'react-router-bootstrap'
import { Cloudinary } from 'cloudinary-core'
import styled from 'styled-components'

import { cart } from '../../reducers/cart'

const cloudinaryCore = new Cloudinary({ cloud_name: 'moonstone-space' })

const StyledCardImg = styled(Card.Img)`
  height: 20vw;
  width: 100%;
  object-fit: cover;

`

export const CartProductCard = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <Card>
      <Row xs="2">
        <Col>
          <LinkContainer to={`/shop/${product._id}`}>
            <StyledCardImg src={cloudinaryCore.url(product.images[0])} />
          </LinkContainer>
        </Col>

        <Col>
          <Row><Card.Title> {product.name} </Card.Title></Row>
          <Row><Card.Subtitle> {product.price} kr</Card.Subtitle></Row>
          <Row xs="3">
            <Col> <Button onClick={() => dispatch(cart.actions.removeItem(product))}>-</Button></Col>
            <Col> <Card.Text> {product.quantity} x</Card.Text></Col>
            <Col><Button onClick={() => dispatch(cart.actions.addItem(product))}>+</Button></Col>
          </Row>

        </Col>
      </Row>
    </Card>

  )
}