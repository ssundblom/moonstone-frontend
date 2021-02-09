import React from 'react'
import { useSelector } from 'react-redux'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

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

const StyledSpan = styled.span`
  margin-right: 5px;
`

export const Header = () => {
  const numProductsInCart = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + item.quantity), 0)
  ))

  return (
    <Navbar collapseOnSelect bg="light" sticky="top" expand="lg">
      <StyledHamburger aria-controls="basic-navbar-nav" />

      <LinkContainer className="order-lg-0" to="/">
        <Nav.Link>
          <Navbar.Brand className="mx-auto">
            <StyledLogo src={`${process.env.PUBLIC_URL}/logo.svg`} />
          </Navbar.Brand>
        </Nav.Link>
      </LinkContainer>

      <LinkContainer className="order-lg-3" to="/cart">
        <Nav.Link>
          <StyledSpan>{numProductsInCart}</StyledSpan>
          <Icon icon="shopping-bag" size="lg" color="var(--secondary)" />
        </Nav.Link>
      </LinkContainer>

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