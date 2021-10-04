import React, { Fragment } from 'react'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/my-projects' className='nav-link'>
      My Projects
    </NavLink>
    <NavLink to='/create-project' className='nav-link'>
      Create a Project
    </NavLink>
    <NavLink to='/change-password' className='nav-link'>
      Change Password
    </NavLink>
    <NavLink to='/sign-out' className='nav-link'>
      Sign Out
    </NavLink>
  </Fragment>
)
const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink to='/projects' className='nav-link'>
      Projects
    </NavLink>
    <NavLink to='/' className='nav-link'>
      Home
    </NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar sticky="top" id='basic-navbar-nav' bg='dark' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>
        BuildIT
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
      </Nav>
      <NavDropdown
        id='basic-nav-dropdown'
        bg='primary'
        title='My Account'
        className='ms-auto'>
        {user ? authenticatedOptions : unauthenticatedOptions}
      </NavDropdown>
      <Nav className='ml-auto'>{alwaysOptions}</Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header

// <NavLink href="#x"><Link id="RouterNavLink" style={None} to="/contact">anywords</Link></NavLink>

// <NavLink id="RouterNavLink" style={None} to="/contact">anywords</NavLink>
