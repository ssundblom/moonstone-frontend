import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { CheckboxList } from '../organisms/CheckboxList'

export const CreateMix = () => {
  const [selection, setSelection] = useState([])


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }  

const handleChange = (value, event) => {
  if (value[0]) {
    setSelection(selection.concat(value[0]))
  } else {
    setSelection(selection.filter(item => item !== event.target.value))
  }

  console.log('value:', value)
  console.log('event.target.value:', event.target.value)
  }

  const printSelection = (event) => {
    event.preventDefault()
    console.log(selection)
  }
  
  return (
    <Container className="text-center justify-content-md-center">
      <Row>
        <Col>
          <p> Ok, we all know life can be tricky at times.
            Where, or with what, do you feel like you need some extra support?</p>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit}>

        <CheckboxList onChange={handleChange}/>

        <Row>
          <Col>
              <Button type="submit" onClick={printSelection}>Continue</Button>
          </Col>
        </Row>

      </Form>
    </Container>

  )
}

