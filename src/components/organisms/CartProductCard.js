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
  height: 15vw;
  width: 100%;
  object-fit: cover;

`

export const CartProductCard = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <Card>
      <Row>
        <Col>
          <LinkContainer to={`/shop/${product._id}`}>
            <StyledCardImg src={cloudinaryCore.url(product.images[0])} />
          </LinkContainer>
        </Col>

        <Col>
          <Row><Card.Title> {product.name} </Card.Title></Row>
          <Row><Card.Subtitle> {product.price} kr</Card.Subtitle></Row>

          <Row xs="3" className="align-items-center justify-content-center">
            <Col xs="auto"><Button variant="white" onClick={() => dispatch(cart.actions.removeItem(product))}>-</Button></Col>
            <Col xs="auto"><Card.Text>{product.quantity}</Card.Text></Col>
            <Col xs="auto"><Button variant="white" onClick={() => dispatch(cart.actions.addItem(product))}>+</Button></Col>
          </Row>

        </Col>
      </Row>
    </Card>

  )
}