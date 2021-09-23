import React, { Fragment } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
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
      Home
    </NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar fixed='side' bg='dark' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>
        BuiltIT
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle variant='dark' aria-controls='basic-navbar-nav' />
    <Navbar.Collapse variant='dark' id='basic-navbar-nav'>
      <Nav>
        {' '}
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email.name}</span>
        )}
        {alwaysOptions}
      </Nav>
      <Nav> {user ? '' : unauthenticatedOptions}</Nav>
      <NavDropdown variant='dark' title='My Account' id='basic-nav-dropdown'>
        <NavDropdown.Item variant='dark' className='ml-auto'>
          {user && (
            <span className='navbar-text mr-2'>Welcome, {user.email.name}</span>
          )}
        </NavDropdown.Item>
        <NavDropdown.Item variant="dark" href='#action/3.2'>
          {user ? authenticatedOptions : unauthenticatedOptions}
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
