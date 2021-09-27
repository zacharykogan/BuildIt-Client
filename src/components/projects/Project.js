import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
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

const steps = {
  fontSize: '16px',
  fontWeight: '400'
}
class Project extends Component {
  constructor (props) {
    super(props)

    this.state = {
      project: {}
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/projects/${this.props.match.params.id}`)
      .then(res => this.setState({ project: res.data.project }))
      .catch(console.error)
  }

  render () {
    const { project } = this.state
    const asList = (item, index) => (<li key={index}>{item}</li>)
    return (
      <>
        <Row>
          <Col xs={10} md={8} style={cardCol}>
            <Card style={card} className='m-auto'>
              <Card.Img
                variant='top'
                src={`${project.image}`}
                style={cardImg}
              />
              <Card.Body style={cardBody}>
                <Card.Title style={cardTitle}>{project.name}</Card.Title>
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
                <Card.Title style={steps}>
                  Steps :
                  <ol>
                    {project.steps ? project.steps.map(asList) : 'Loading...'}
                  </ol>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}

export default withRouter(Project)
