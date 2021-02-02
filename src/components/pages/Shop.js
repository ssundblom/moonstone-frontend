import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProductCard } from '../organisms/ProductCard'

export const Shop = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/products${props.location.search}`)
      .then((res) => {
        return res.json()
      })
      .then(productsJson => {
        setProducts(productsJson)
      })
  }, [props.location.search])

  return (
    <Container>
      <Row xs="1" sm="2" md="2" lg="3" xl="3" className="justify-content-center">
        {products.map(product => {
          return (
            <Col key={product._id} className="my-3">
              <ProductCard {...product} />
            </Col>
          )
        })
        }
      </Row>
    </Container>
  )
}