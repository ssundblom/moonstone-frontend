import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { CheckboxList } from '../organisms/CheckboxList'
import { Checkbox } from 'components/atoms/Checkbox'

export const CreateMix = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p> Ok, we all know life can be tricky at times.
            Where, or with what, do you feel like you need some extra support?</p>
        </Col>
      </Row>
      <CheckboxList />
      <Row>
        <Col>
          <Link to="shop">  <Button>Continue</Button></Link>
        </Col>
      </Row>
    </Container>

  )
}

