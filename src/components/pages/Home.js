import React from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'

const StyledJumbo = styled(Jumbotron)`
  padding: 0;
  margin: 0;
  background-image: url(${process.env.PUBLIC_URL}/sage.jpg);
  background-size: cover;
  background-position: center center;
  height: 90vh;
`
const StyledH2 = styled.h2`
  color: white;
  margin-top: 20vh;
`
const StyledLink = styled(Link)`
  color: white;
`
export const Home = () => {
  return (
    <>
      <StyledJumbo fluid>

        <Container className="text-center">
          <Row style={{ height: '40vh' }} className="align-items-center align-content-around" xs="1">
            <Col>
              <StyledH2> Find the perfect selection of soul-nurturing goodies, for you</StyledH2>
            </Col>
            <Col>
              <Link to="/create-mix">
                <Button>Find your selection</Button>
              </Link>
            </Col>
            <Col>
              <StyledLink to="/shop">Or browse all products</StyledLink>
            </Col>
          </Row>
        </Container>
      </StyledJumbo>
    </>
  )
}