import React from 'react'
import { Button, Form } from 'react-bootstrap'

const ProjectForm = ({ project, formHandler, changeHandler, listHandler }) => (
  <div className='row'>
    <div className='col-sm-10 col-md-8 mx-auto mt-5'>
      <h3>{!project ? 'Create Project' : 'Edit Project'}</h3>
      <Form onSubmit={formHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            name='name'
            value={project ? project.name : null}
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
            value={project ? project.category : null}
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
            value={project ? project.description : null}
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
            value={project ? project.tools : null}
            type='tools'
            placeholder={project && project.tools ? project.tools : 'Tools'}
            onChange={listHandler}
            as='textarea'
            rows={3}
          />
        </Form.Group>
        <Form.Group controlId='materials'>
          <Form.Label>Materials</Form.Label>
          <Form.Control
            required
            name='materials'
            value={project ? project.materials : null}
            type='materials'
            placeholder={
              project && project.materials ? project.materials : 'Materials'
            }
            onChange={listHandler}
            as='textarea'
            rows={3}
          />
        </Form.Group>
        <Form.Group controlId='steps'>
          <Form.Label>Steps</Form.Label>
          <Form.Control
            required
            name='steps'
            value={project ? project.steps : null}
            type='steps'
            placeholder={project && project.steps ? project.steps : 'Steps'}
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
            value={project ? project.image : null}
            type='image'
            placeholder={project && !project.image ? project.image : 'image'}
            onChange={changeHandler}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  </div>
)

export default ProjectForm
