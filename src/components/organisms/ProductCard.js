import React from 'react'
import { useDispatch } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { LinkContainer } from 'react-router-bootstrap'
import { Cloudinary } from 'cloudinary-core'

import { cart } from '../../reducers/cart'

const cloudinaryCore = new Cloudinary({ cloud_name: 'moonstone-space' })

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <Card>
      <LinkContainer to={`/shop/${product._id}`}>
        <Card.Img variant="top" src={cloudinaryCore.url(product.images[0])} />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={`/shop/${product._id}`}>
          <Card.Title> {product.name} </Card.Title>
        </LinkContainer>
        <Card.Text>
          {product.price} kr
        </Card.Text>
        <Button variant="dark" onClick={() => { dispatch(cart.actions.addItem(product)) }}>Buy</Button>
      </Card.Body>
    </Card>
  )
}