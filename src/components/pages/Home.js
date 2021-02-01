import React from 'react'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <Container className="text-center justify-content-center align-items-center">
      <Row style={{height: '50vh'}} className="align-items-center" xs="1" sm="1" md="1" lg="1" xl="1">
        <Col>
          <p> Find the perfect selection of soul-nurturing goodies, for you</p>
        </Col>
        <Col>
          <Link to="/create-mix">
            <Button>Create your mix</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/shop">Or browse all products</Link>
        </Col>
      </Row>
    </Container>
  )
}