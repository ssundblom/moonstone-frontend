import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const ProductCard = ({name, description, img}) => {
  return ( 
  <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title> {name} </Card.Title>
      <Card.Text>
        {description}
    </Card.Text>
      <Button variant="primary">Buy</Button>
    </Card.Body>
  </Card>
  )
}