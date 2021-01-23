import React from 'react'

import { Hamburger } from '../atoms/Hamburger'
import { Cart } from '../atoms/Cart'

export const Header = () => {
  return (
    <>
      <Hamburger />
      <Cart />
    </>
  )
}