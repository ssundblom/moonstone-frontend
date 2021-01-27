import React, { useEffect, useState } from 'react'
import { ProductCard } from '../organisms/ProductCard'

export const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((res) => {
        return res.json()
      })
      .then(productsJson => {
        console.log(productsJson)

        setProducts(productsJson)
      })
  }, [])
  //products inside the klamrar?
  return (
    <>
      { products.map(product => {
        return <ProductCard key={product._id} {...product} />
      })
      }
    </>
  )
}