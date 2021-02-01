import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { LinkContainer } from 'react-router-bootstrap'
import { Cloudinary } from 'cloudinary-core'

const cloudinaryCore = new Cloudinary({cloud_name: 'moonstone-space'})

export const ProductCard = ({ name, price, _id, images }) => {
  return (
    <Card>
        <LinkContainer to={`/shop/${_id}`}>
          <Card.Img variant="top" src={cloudinaryCore.url(images[0])} />
        </LinkContainer>
      <Card.Body>
        <LinkContainer to={`/shop/${_id}`}>
          <Card.Title> {name} </Card.Title>
        </LinkContainer>
        <Card.Text>
          {price} kr
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  )
}