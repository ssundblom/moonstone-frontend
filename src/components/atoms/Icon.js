import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingBag)

export const Icon = (props) => {
  return (
    <FontAwesomeIcon icon={props.icon} color={props.color} size={props.size} />
  )
}