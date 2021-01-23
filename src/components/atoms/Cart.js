import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingBag)

export const Cart = (props) => {
  return (
    <FontAwesomeIcon icon="shopping-bag" color={props.theme.colors.secondary} />
  )
}