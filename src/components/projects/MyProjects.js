import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import { myProjects } from '../../api/projects'

const card = {
  border: 'none',
  borderRadius: '10px',
  width: '350',
  background: 'rgba(0, 0, 0, 0.7)'
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
  borderRadius: '0px 0px 8px 8px',
  color: 'white'
}

class MyProjects extends Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    const { user } = this.props
    myProjects(user)
      .then((res) => this.setState({ projects: res.data.projects }))
      .catch(console.error)
  }

  render () {
    const { projects } = this.state

    const projectList = projects.map((item) => (
      <Col xs={12} md={6} lg={4} xl={4} key={item._id} style={cardCol}>
        <Card style={card} className='m-auto'>
          <Link style={{ margin: 'auto' }} to={`/my-projects/${item._id}`}>
            <Card.Img variant='top' src={`${item.image}`} style={cardImg} />
          </Link>
          <Card.Body style={cardBody}>
            <Card.Title style={cardTitle}>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))

    return (
      <>
        <h2>My Projects</h2>
        <Row>
          <h3 className='text-light mt-5'></h3>
          <Col xs={12} style={{ marginTop: '10px' }}>
            <Row>{projectList}</Row>
          </Col>
          <div className='col-12 mt-5'></div>
        </Row>
      </>
    )
  }
}

export default withRouter(MyProjects)
