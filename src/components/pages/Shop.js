import React, { useEffect, useState } from 'react'

import { ProductCard } from '../organisms/ProductCard'

export const Shop = (props) => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:8080/products${props.location.search}`)
      .then((res) => {
        return res.json()
      })
      .then(productsJson => {
        setProducts(productsJson)
      })
  }, [props.location.search])
 
  return (
    <>
      { products.map(product => {
        return <ProductCard key={product._id} {...product} />
      })
      }
    </>
  )
}