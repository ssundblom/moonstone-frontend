import React from 'react'

import { Hamburger } from '../atoms/Hamburger'
import { Cart } from '../atoms/Cart'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

export const Header = () => {
  return (
    <>
      <Hamburger />
      <Logo alt="page logo" />
      <Cart />
    </>
  )
}