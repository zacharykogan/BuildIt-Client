import React, { Component } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { Card, Col, Row, Button } from 'react-bootstrap'
import { deleteProject } from '../../api/projects.js'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const card = {
  border: 'none',
  borderRadius: '10px',
  width: 'auto',
  background: 'black'
}

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
  backgroundColor: 'black',
  borderRadius: '0px 0px 8px 8px',
  color: 'white'
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
    const { project, deleted } = this.state
    if (deleted) {
      return (
        <Redirect
          to={{ pathname: '/my-projects', state: { msg: 'Project successfully deleted!' } }}
        />
      )
    }
    const asList = (item, index) => <li key={index}>{item}</li>
    return (
      <Row>
        <Col xs={10} md={8} style={cardCol}>
          <Card style={card} className='m-auto'>
            <Card.Img variant='top' src={`${project.image}`} style={cardImg} />
            <Card.Body style={cardBody}>
              <Card.Title style={cardTitle}>{project.name}</Card.Title>
              <Button onClick={this.destroy}>Delete</Button>
              <Link to={`/my-projects/${project._id}/edit`}>
                <button>Edit</button>
              </Link>
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
              <Card.Text>
                Steps :
                <ol>
                  {project.steps ? project.steps.map(asList) : 'Loading...'}
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default withRouter(MyProject)
