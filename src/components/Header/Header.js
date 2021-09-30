import React, { Fragment } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const myAccount = {
  align: 'right',
  color: 'white'
}
const authenticatedOptions = (
  <Fragment>
    <Nav.Link as={Link} to='/my-projects' className='nav-link'>
      My Projects
    </Nav.Link>
    <Nav.Link as={Link} to='/create-project' className='nav-link'>
      Create a Project
    </Nav.Link>
    <Nav.Link as={Link} to='/change-password' className='nav-link'>
      Change Password
    </Nav.Link>
    <Nav.Link as={Link} to='/sign-out' className='nav-link'>
      Sign Out
    </Nav.Link>
  </Fragment>
)
const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link as={Link} to='/sign-in' className='nav-link'>
      Sign In
    </Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link as={Link} to='/' className='nav-link'>
      Home
    </Nav.Link>
    <Nav.Link as={Link} to='/projects' className='nav-link'>
      Projects
    </Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar sticky='top' bg='dark' variant='dark' expand='md'>
    <Navbar.Brand>
      <Nav.Link
        as={Link}
        to='/'
        style={{ color: '#FFF', textDecoration: 'none' }}>
        🪜 BuildIT
      </Nav.Link>
    </Navbar.Brand>
    <Navbar.Toggle variant='dark' aria-controls='basic-navbar-nav' />
    <Navbar.Collapse variant='dark' id='basic-navbar-nav'>
      <Nav className='ms-auto'> {alwaysOptions}</Nav>
      <>
        <NavDropdown
          style={myAccount}
          variant='dark'
          title='My Account '
          id='nav-dropdown'>
          <NavDropdown variant='dark'>
            {user && (
              <span className='navbar-text mr-2'>
                Welcome, {user.email.name}
              </span>
            )}
          </NavDropdown >
          <NavDropdown.Item variant='dark'>
            {user ? authenticatedOptions : unauthenticatedOptions}
          </NavDropdown.Item>
        </NavDropdown>
      </>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

// <NavLink href="#x"><Link id="RouterNavLink" style={None} to="/contact">anywords</Link></NavLink>

// <NavLink id="RouterNavLink" style={None} to="/contact">anywords</NavLink>
