import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

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

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onSignUp = (event) => {
  event.preventDefault()

  const { msgAlert, history, setUser } = this.props

  signUp(this.state)
    .then(() => signIn(this.state))
    .then((res) => setUser(res.data.user))
    .then(() =>
      msgAlert({
        heading: 'Sign Up Success',
        message: signUpSuccess,
        variant: 'success'
      })
    )
    .then(() => history.push('/'))
    .catch((error) => {
      this.setState({ name: '', lastName: '', email: '', password: '', passwordConfirmation: '' })
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        variant: 'danger'
      })
    })
}

render () {
  const { email, password, passwordConfirmation } = this.state

  return (
    <div className='row'>
      <div style={form} className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h2>Sign Up</h2>
        <Form onSubmit={this.onSignUp}>
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
          </Form.Group><br></br>
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
          <Form.Group controlId='passwordConfirmation'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              name='passwordConfirmation'
              value={passwordConfirmation}
              type='password'
              autoComplete='on'
              placeholder='Confirm Password'
              onChange={this.handleChange}
            />
          </Form.Group>
          <br></br>
          <Button style={button} type='submit'>
            Sign Up
          </Button>
        </Form>
        <br></br>
      </div>
    </div>
  )
}
}

export default withRouter(SignUp)
