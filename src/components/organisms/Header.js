import React from 'react'
import { styled } from 'styled-components'

import { Hamburger } from '../atoms/Hamburger'
import { Cart } from '../atoms/Cart'
import { ReactComponent as Logo} from '../../assets/images/logo.svg'

export const Header = () => {
  return (
    <>
      <Hamburger />
      <Logo />
      <Cart />
    </>
  )
}