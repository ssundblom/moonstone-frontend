import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faShoppingBag, 
  faHeart, 
  faWater, 
  faHamsa, 
  faFireAlt,
  faPrayingHands,
  faHandHoldingHeart,
  faEye,
  faPalette,
  faChartLine,
  faSeedling,
  faMoon,
  faBolt,
  faAtom,
  faExchangeAlt,
  faFistRaised

} from '@fortawesome/free-solid-svg-icons'

library.add(
  faShoppingBag, 
  faHeart, 
  faWater,
  faHamsa,
  faFireAlt,
  faPrayingHands,
  faHandHoldingHeart,
  faEye,
  faPalette,
  faChartLine,
  faSeedling,
  faMoon,
  faBolt,
  faAtom,
  faExchangeAlt,
  faFistRaised
  )

export const Icon = (props) => {
  return (
    <FontAwesomeIcon icon={props.icon} color={props.color} size={props.size}  />
  )
}