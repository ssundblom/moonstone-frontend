import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { Hamburger } from '../atoms/Hamburger'
import { Cart } from '../atoms/Cart'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

export const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/" >
        <Navbar.Brand>Moonstone</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar">
        <Nav className="navbar-auto">
          <LinkContainer to="/shop">
            <Nav.Link>Shop</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/articles">
            <Nav.Link>Articles</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )


  // return (
  //   <>
  //     <Hamburger {...props} />
  //     <Logo alt="page logo" />
  //     <Cart {...props} />
  //   </>
  // )
}