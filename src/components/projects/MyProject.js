import React, { Component } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { deleteProject } from '../../api/projects.js'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const cardImg = {
  margin: 'auto',
  padding: '25px',
  width: 'md'
}

const cardCol = {
  margin: 'auto',
  marginTop: '10px'
}

const cardTitle = {
  height: '50px'
}

const cardBody = {
  borderRadius: '0px 0px 8px 8px',
  color: 'white'
}

const card = {
  border: 'none',
  borderRadius: '10px',
  width: '350',
  background: 'rgba(0, 0, 0, 0.7)'
}
const steps = {
  fontSize: '16px',
  fontWeight: '400'
}
const editButton = {
  color: 'yellow',
  border: 'auto',
  background: 'rgba(240, 230, 180, 0.3)',
  fontSize: '1.2em',
  fontWeight: 'bolder',
  width: '90%',
  marginBottom: '6px',
  marginLeft: '5%'
}

const deleteButton = {
  color: 'rgb(255, 99, 71)',
  background: 'rgba(255, 99, 71, 0.25)',
  fontSize: '1.2em',
  fontWeight: 'bolder',
  width: '90%',
  border: 'none',
  marginBottom: '8px',
  marginLeft: '5%'
}

const backButton = {
  color: 'black',
  border: 'auto',
  background: 'rgba(240, 230, 180, 0.8)',
  fontSize: '1.2em',
  fontWeight: 'bolder',
  width: '100%',
  marginBottom: '6px'
}

class MyProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      project: {},
      deleted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/my-projects/${this.props.match.params.id}`)
      .then((res) => this.setState({ project: res.data.project }))
      .catch(console.error)
  }

  destroy = () => {
    const { user } = this.props
    deleteProject(this.props.match.params.id, user)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { deleted } = this.state
    if (deleted) {
      return (
        <Redirect
          to={{ pathname: '/my-projects', state: { msg: 'Project successfully deleted!' } }}
        />
      )
    }
    const { project } = this.state
    const asList = (item, index) => (<li key={index}>{item}</li>)
    return (
      <Row>
        <Col xs={10} md={8} style={cardCol}>
          <Card style={card} className='m-auto'>
            <Card.Img variant='top' src={`${project.image}`} style={cardImg} />
            <Card.Body style={cardBody}>
              <Card.Title style={cardTitle}>{project.name}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
              <Card.Text>
                Tools :{' '}
                {project.tools ? project.tools.map(asList) : 'Loading...'}
              </Card.Text>
              <Card.Text>
                Materials :{' '}
                {project.materials
                  ? project.materials.map(asList)
                  : 'Loading...'}
              </Card.Text>
              <Card.Title
                style={steps}>
                Steps :
                <ol>
                  {project.steps ? project.steps.map(asList) : 'Loading...'}
                </ol>
              </Card.Title>
              <Link
                className='btn'
                role='button'
                style={editButton}
                to={`/my-projects/${project._id}/edit`}>
                Edit
              </Link>
              <Button
                style={deleteButton}
                onClick={() => {
                  if (
                    window.confirm('Are you sure you wish to delete this item?')
                  ) {
                    this.destroy()
                  }
                }}>
                Delete
              </Button>
              <Link
                className='btn'
                role='button'
                style={backButton}
                to={'/my-projects/'}>
                Back
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default withRouter(MyProject)
