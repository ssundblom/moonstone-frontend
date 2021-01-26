import React, { useEffect } from 'react'

export const Shop = () => {

  useEffect(() => {
    fetch('http://localhost:8080/products')
    .then((res) => {
      return res.json()
    })
    .then(productsJson => {
      console.log(productsJson)
    })
  })
  return (
    <p> Shop </p>
  )
}