import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProductCard } from '../organisms/ProductCard'

import { Loading } from '../organisms/Loading'

export const Shop = (props) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/products${props.location.search}`)
      .then((res) => {
        return res.json()
      })
      .then(productsJson => {
        setProducts(productsJson)
        setIsLoading(false)
      })
  }, [props.location.search])

  if (isLoading) {
    return (
      <Loading />
    )
  } else {
    return (
      <Container>
        <Row xs="1" sm="2" md="2" lg="3" xl="3" className="justify-content-center">
          {products.map((product) => {
            return (
              <Col key={product._id} className="my-3">
                <ProductCard product={product} />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}