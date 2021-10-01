import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const form = {
  background: 'rgba(0, 0, 0, 0.5)',
  margin: 'auto',
  padding: '25px',
  width: 'md',
  color: 'rgba(240, 230, 180, 0.8)'
}
const button = {
  color: 'black',
  border: 'none',
  background: 'rgba(240, 230, 180, 0.8)',
  fontSize: '1.2em',
  fontWeight: 'bolder',
  width: '90%',
  marginBottom: '6px',
  marginLeft: '6%',
  textAlign: 'center'
}
const cancelButton = {
  color: 'black',
  border: 'auto',
  background: 'rgba(240, 230, 180, 0.3',
  fontSize: '1.2em',
  fontWeight: 'bolder',
  width: '90%',
  marginLeft: '6%',
  marginBottom: '6px'
}
class ProjectForm extends Component {
  constructor (props) {
    super(props)

    this.state = { value: '' }
  }

  render () {
    const { project, formHandler, changeHandler, listHandler } = this.props
    return (
      <div className='row'>
        <div style={form} className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>{!project ? 'Create Project' : 'Edit Project'}</h3>
          <Form onSubmit={formHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                name='name'
                value={project ? project.name : this.state.value}
                type='name'
                placeholder={project && project.name ? project.name : 'Title'}
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                required
                name='category'
                value={project ? project.category : this.state.value}
                type='category'
                placeholder={
                  project && project.category ? project.category : 'Category'
                }
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                name='description'
                value={project ? project.description : this.state.value}
                type='Description'
                placeholder={
                  project && project.description
                    ? project.description
                    : 'Description'
                }
                onChange={changeHandler}
                as='textarea'
                rows={3}
              />
            </Form.Group>
            <Form.Group controlId='tools'>
              <Form.Label>Tools</Form.Label>
              <Form.Control
                required
                name='tools'
                value={project ? project.tools : this.state.value}
                type='tools'
                placeholder={
                  project && project.tools
                    ? project.tools
                    : 'Tools separated by commas'
                }
                onChange={listHandler}
              />
            </Form.Group>
            <Form.Group controlId='materials'>
              <Form.Label>Materials</Form.Label>
              <Form.Control
                required
                name='materials'
                value={project ? project.materials : this.state.value}
                type='materials'
                placeholder={
                  project && project.materials
                    ? project.materials
                    : 'Materials, separated by commas'
                }
                onChange={listHandler}
              />
            </Form.Group>
            <Form.Group controlId='steps'>
              <Form.Label>Steps</Form.Label>
              <Form.Control
                required
                name='steps'
                value={project ? project.steps : this.state.value}
                type='steps'
                placeholder={
                  project && project.steps
                    ? project.steps
                    : 'Steps, separated by commas'
                }
                onChange={listHandler}
                as='textarea'
                rows={7}
              />
            </Form.Group>
            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                required
                name='image'
                value={project ? project.image : this.state.value}
                type='image'
                placeholder={
                  project && !project.image ? project.image : 'image url'
                }
                onChange={changeHandler}
                as='textarea'
              />
            </Form.Group>
            <br></br>
            <Button className='text-center' style={button} variant='primary' type='submit'>
              Submit
            </Button>
            <Link
              className='btn'
              role='button'
              style={cancelButton}
              to={
                !project
                  ? '/my-projects/'
                  : `/my-projects/${project._id}`
              }>
              Cancel
            </Link>
          </Form>
        </div>
      </div>
    )
  }
}
export default ProjectForm
