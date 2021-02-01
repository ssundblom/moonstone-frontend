import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Image } from 'cloudinary-react'

export const Product = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:8080/products/${productId}`)
      .then((res) => {
        return res.json()
      })
      .then(json => {
        setProduct(json)
        setIsLoading(false)
      })
  }, [productId])

  if (isLoading) {
    return (<p>loading ...</p>)
  } else {
    return (
      <Container >
        <Row>
          <Col>
            <Image publicId={product.images[0]} />
          </Col>
        </Row>
        <Row>
          <Col> <h3>{product.name}</h3></Col>
        </Row>
        <Row>
          <Col> {product.price}kr </Col>
        </Row>
        <Row>
          <Button>Buy</Button>
        </Row>
        <Row>
          <Col> <b>Soul Powers:</b> <p>{product.soulPowers && product.soulPowers.join(', ')}</p></Col>
        </Row>
        <Row>
          <Col> <b>About:</b> <p>{product.description}</p></Col>
        </Row>
      </Container>
    )
  }
}