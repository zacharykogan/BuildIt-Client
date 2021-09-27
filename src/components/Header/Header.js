import React, { Fragment } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
const myAccount = {
  align: 'right',
  color: 'white'
}
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
    <NavLink to='/' className='nav-link'>
      Home
    </NavLink>
    <NavLink to='/projects' className='nav-link'>
      Projects
    </NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar sticky='top' bg='dark' variant='dark' expand='md'>
    <Navbar.Brand>
      <NavLink to='/' style={{ color: '#FFF', textDecoration: 'none' }}>
        🪜 BuildIT
      </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle variant='dark' aria-controls='basic-navbar-nav' />
    <Navbar.Collapse variant='dark' id='basic-navbar-nav'>
      <Nav className='ms-auto'>
        {' '}
        {alwaysOptions}
      </Nav>
      <NavDropdown
        style={myAccount}
        className='ml-auto'
        variant='dark'
        title='My Account '
        id='nav-dropdown'>
        🛠️
        <NavDropdown.Item variant='dark' className='ml-auto'>
          {user && (
            <span className='navbar-text mr-2'>Welcome, {user.email.name}</span>
          )}
        </NavDropdown.Item>
        <NavDropdown.Item variant='dark' href='#action/3.2'>
          {user ? authenticatedOptions : unauthenticatedOptions}
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
