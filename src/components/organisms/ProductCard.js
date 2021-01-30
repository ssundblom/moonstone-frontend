import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { Image } from 'cloudinary-react'

export const ProductCard = ({ name, price, _id, images }) => {
  return (
    <Card>
      <Image variant="top" publicId={images[0]} />
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