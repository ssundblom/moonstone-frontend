import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import { Cloudinary } from 'cloudinary-core'

import { cart } from '../../reducers/cart'
import { Loading } from '../organisms/Loading'

const cloudinaryCore = new Cloudinary({ cloud_name: 'moonstone-space' })

export const Product = () => {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/products/${productId}`)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setProduct(json)
        setIsLoading(false)
      })
  }, [productId])

  if (isLoading) {
    return (
      <Loading />
    )
  } else {
    return (
      <Container>
        <Row xs="1" sm="1" md="1" lg="2" xl="2">
          <Col className="text-center justify-content-center">
            <Image src={cloudinaryCore.url(product.images[0], { width: 750, height: 1000, crop: 'fill' })} fluid />
          </Col>
          <Col className="my-3">
            <Row noGutters> <h3>{product.name}</h3></Row>
            <Row noGutters> {product.price}kr </Row>
            <Row noGutters className="my-3"><Button variant="dark" onClick={() => { dispatch(cart.actions.addItem(product)) }}>Buy</Button> </Row>
            <Row noGutters><b>Soul Powers</b> </Row>
            <Row noGutters><p>{product.soulPowers && product.soulPowers.join(', ')}</p></Row>
            <Row noGutters> <b>About</b> </Row>
            <Row noGutters> <p>{product.description}</p></Row>
          </Col>
        </Row>
      </Container>
    )
  }
}