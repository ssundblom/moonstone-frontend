import React from 'react'

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'


import { Checkbox } from '../atoms/Checkbox'

export const CheckboxList = () => {
  return (
   <ToggleButtonGroup type="checkbox">
     <ToggleButton value={1}>hej</ToggleButton>
     <ToggleButton value={2}>hej</ToggleButton>
     <ToggleButton value={3}>hej</ToggleButton>
   </ToggleButtonGroup>
  )
}

