import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

export const ProductCard = ({ name, price, _id, img }) => {
  return (
    <Card>

      <Card.Img variant="top" src="holder.js/100px180" />
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