import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

export const Hamburger = (props) => {
  return (
    <FontAwesomeIcon icon="bars" color={props.theme.colors.secondary} />
  )
}