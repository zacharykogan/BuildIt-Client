import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createProject, index } from '../../api/projects'
import { createProjectFailure, createProjectSuccess } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      category: '',
      description: '',
      image: '',
      tools: '',
      materials: '',
      steps: []
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  onCreateProject = (event) => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    createProject(this.state, user)
      .then((res) => console.log(res.data.user))
      .then(() =>
        msgAlert({
          heading: 'Project Created Success',
          message: createProjectSuccess,
          variant: 'success'
        })
      )
      .catch(console.error)
      .then(
        index().then((res) => this.setState({ projects: res.data.projects }))
      )
      .then(() => history.push('/my-projects'))
      .catch((error) => {
        this.setState({
          name: '',
          category: '',
          description: '',
          image: '',
          tools: '',
          materials: '',
          steps: []
        })
        msgAlert({
          heading: 'Create Project Failed with error: ' + error.message,
          message: createProjectFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { name, category, image, description, tools, materials, steps } = this.state

    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>Create Project</h3>
          <Form onSubmit={this.onCreateProject}>
            <Form.Group controlId='name'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                name='name'
                value={name}
                type='name'
                placeholder='Title'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                required
                name='category'
                value={category}
                type='category'
                placeholder='Category'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                name='description'
                value={description}
                type='Description'
                placeholder='Description'
                onChange={this.handleChange}
                as='textarea'
                rows={3}
              />
            </Form.Group>
            <Form.Group controlId='tools'>
              <Form.Label>Tools</Form.Label>
              <Form.Control
                required
                name='tools'
                value={tools}
                type='tools'
                placeholder='Tools'
                onChange={this.handleChange}
                as='textarea'
                rows={3}
              />
            </Form.Group>
            <Form.Group controlId='materials'>
              <Form.Label>Materials</Form.Label>
              <Form.Control
                required
                name='materials'
                value={materials}
                type='materials'
                placeholder='Materials'
                onChange={this.handleChange}
                as='textarea'
                rows={3}
              />
            </Form.Group>
            <Form.Group controlId='steps'>
              <Form.Label>Steps</Form.Label>
              <Form.Control
                required
                name='steps'
                value={steps}
                type='steps'
                placeholder='Steps'
                onChange={this.handleChange}
                as='textarea'
                rows={7}
              />
            </Form.Group>
            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                required
                name='image'
                value={image}
                type='image'
                placeholder='image'
                onChange={this.handleChange}
                as='textarea'
                rows={1}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateProject)
