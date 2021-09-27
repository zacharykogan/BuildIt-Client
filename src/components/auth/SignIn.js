import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { signIn } from '../../api/auth'
import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const form = {
  background: 'rgba(0, 0, 0, 0.5)',
  margin: 'auto',
  padding: '25px',
  width: 'md',
  color: 'rgba(240, 230, 180, 0.8)'
}
const button = {
  color: 'blue',
  border: 'none',
  background: 'rgba(240, 230, 180, 0.8)',
  fontSize: '1.2em',
  fontWeight: 'bolder',
  width: '100%'
}
class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onSignIn = (event) => {
  event.preventDefault()

  const { msgAlert, history, setUser } = this.props

  signIn(this.state)
    .then((res) => setUser(res.data.user))
    .then(() =>
      msgAlert({
        heading: 'Welcome to BuildIt',
        message: signInSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/projects'))
    .catch((error) => {
      this.setState({ email: '', password: '' })
      msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: signInFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { email, password } = this.state

  return (
    <div className='row'>
      <div style={form} className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h2>Sign In</h2>
        <Form onSubmit={this.onSignIn}>
          <Form.Group controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={password}
              type='password'
              autoComplete='on'
              placeholder='Password'
              onChange={this.handleChange}
            />
          </Form.Group>
          <br></br>
          <Button
            style={button}
            type='submit' size="lg">
            Sign In
          </Button>
        </Form>
        <br></br>
        <h5>
          New to BuildIt? <Link to='/sign-up'> Sign up now</Link>
        </h5>
      </div>
    </div>
  )
}
}

export default withRouter(SignIn)
