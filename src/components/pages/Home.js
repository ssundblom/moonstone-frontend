import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <Container className="text-center justify-content-md-center">
        <Col><p> Find the perfect selection of soul-nurturing goodies, for you</p> </Col>
        <Col><Link to="/create-mix"> <Button>Create your mix</Button></Link></Col>
        <Col>
          <Link to="/shop">Or browse all products</Link>
        </Col>
    </Container>
  )
}