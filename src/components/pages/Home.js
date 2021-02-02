import React from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

const StyledJumbo = styled(Jumbotron)`
  padding: 0;
  margin: 0;
  background-image: url(${process.env.PUBLIC_URL}/sage.jpg);
  background-size: cover;
  background-position: center center;
  height: 90vh;
`

export const Home = () => {
  return (
    <>
      <StyledJumbo fluid>

        <Container className="text-center">
          <Row style={{ height: '35vh' }} className="align-items-center align-content-around" xs="1">
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
      </StyledJumbo>
    </>
  )
}