import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'


import { Cart } from '../atoms/Cart'

export const Header = (props) => {
  return (
    <Navbar collapseOnSelect sticky="top" bg="light" expand="lg">
      <LinkContainer to="/" >
        <Navbar.Brand className="order-1 mx-auto"><Logo alt="page logo" />
</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle className="order-0" aria-controls="basic-navbar-nav" />
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
      <Cart {...props} />
    </Navbar>
  )
}