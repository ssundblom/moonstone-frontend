import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export const Product = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8080/products/${productId}`)
      .then((res) => {
        return res.json()
      })
      .then(json => {
        setProduct(json)
      })
  }, [])


  return (
    <>
    </>
  )

}