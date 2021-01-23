import React from 'react'

import { Hamburger } from '../atoms/Hamburger'
import { Cart } from '../atoms/Cart'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

export const Header = (props) => {
  return (
    <>
      <Hamburger {...props} />
      <Logo alt="page logo" />
      <Cart {...props} />
    </>
  )
}