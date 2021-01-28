import React, { useState } from 'react'


import styled from 'styled-components'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


const StyledToggleButton = styled(ToggleButton)`
  border-radius: 50%;
`

export const CheckboxList = () => {
  //const [values, setValues] = useState([])

  const items = [
    { name: 'Love', content: '1' },
    { name: 'Calmness', content: '2' },
    { name: 'Healing', content: '3' },
    { name: 'Relationship', content: '4' },
    { name: 'Clarity', content: '5' },
    { name: 'Mind', content: '6' },
    { name: 'Love', content: '7' },
    { name: 'Calmness', content: '8' },
    { name: 'Healing', content: '9' },
    { name: 'Relationship', content: '10' },
    { name: 'Clarity', content: '11' },
    { name: 'Mind', content: '12' },
  ]

  return (
      <ButtonToolbar>
        <Row className="text-center justify-content-md-center" xs="3" sm="3" md="3" lg="3" xl="3">
          {items.map((item, index) => (
            <Col key={item.name + index} className="my-3">
              <ToggleButtonGroup type="checkbox" aria-label={item.name}>
                <ToggleButton value={item.name}>
                  {item.content}
                </ToggleButton>
              </ToggleButtonGroup>
              <p>{item.name}</p>
            </Col>
          ))}
        </Row>
      </ButtonToolbar>
  )
}

