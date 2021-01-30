import React, { useState } from 'react'


import styled from 'styled-components'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import { Icon } from '../atoms/Icon'


const StyledToggleButton = styled(ToggleButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  height: 50px;
  width: 50px;
`

export const CheckboxList = () => {
  //const [values, setValues] = useState([])

  const items = [
    { name: 'Love', content: <Icon icon="heart" size="lg" color="var(--white)"/>},
    { name: 'Calm', content: <Icon icon="water" size="lg" color="var(--white)"/> },
    { name: 'Protection', content: <Icon icon="hamsa" size="lg" color="var(--white)"/> },
    { name: 'Power', content: <Icon icon="fire-alt" size="lg" color="var(--white)"/> },
    { name: 'Spirituality', content: <Icon icon="praying-hands" size="lg" color="var(--white)"/> },
    { name: 'Relationship', content: <Icon icon="hand-holding-heart" size="lg" color="var(--white)"/> },
    { name: 'Clarity', content: <Icon icon="eye" size="lg" color="var(--white)"/> },
    { name: 'Creativity', content: <Icon icon="palette" size="lg" color="var(--white)"/> },
    { name: 'Success', content: <Icon icon="chart-line" size="lg" color="var(--white)"/> },
    { name: 'Manifestation', content: <Icon icon="seedling" size="lg" color="var(--white)"/> },
    { name: 'Dreams', content: <Icon icon="moon" size="lg" color="var(--white)"/> },
    { name: 'Energy', content: <Icon icon="bolt" size="lg" color="var(--white)"/> },
    { name: 'Abundance', content: <Icon icon="atom" size="lg" color="var(--white)"/> },
    { name: 'Change', content: <Icon icon="exchange-alt" size="lg" color="var(--white)"/> },
    { name: 'Motivation', content: <Icon icon="fist-raised" size="lg" color="var(--white)"/> },
  ]

  return (
      <ButtonToolbar>
        <Row  xs="3" sm="3" md="3" lg="3" xl="3">
          {items.map((item, index) => (
            <Col key={item.name + index} className="my-3">
              <ToggleButtonGroup type="checkbox" aria-label={item.name}>
                <StyledToggleButton variant="success" value={item.name}>
                  {item.content}
                </StyledToggleButton>
              </ToggleButtonGroup>
              <p>{item.name}</p>
            </Col>
          ))}
        </Row>
      </ButtonToolbar>
  )
}

