import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import styled from 'styled-components'

import { Icon } from '../atoms/Icon'

const StyledHamburger = styled(Navbar.Toggle)`
  border: none;
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath 
    stroke='rgba(203, 153, 126)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
  }
`
const StyledLogo = styled(Image)`
  margin-top: -10px;
`

export const Header = (props) => {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg">

      <StyledHamburger className="order-0" aria-controls="basic-navbar-nav" />

      <LinkContainer to="/" >
        <Navbar.Brand className="order-1 mx-auto">
          <StyledLogo src={`${process.env.PUBLIC_URL}/logo.svg`} />
        </Navbar.Brand>
      </LinkContainer>

      <Icon icon="shopping-bag" className="order-2" size="lg" color="var(--secondary)"/>

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
}