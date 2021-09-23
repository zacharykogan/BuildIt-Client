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
      <Row>
        <Col xs={10} md={8} style={cardCol}>
          <Card style={card} className='m-auto'>
            <Card.Img variant='top' src={`${project.image}`} style={cardImg} />
            <Card.Body style={cardBody}>
              <Card.Title style={cardTitle}>{project.name}</Card.Title>
              <Card.Text>Tools : {project.tools ? project.tools.map(asList) : 'Loading...' }</Card.Text>
              <Card.Text>Materials : {project.materials ? project.materials.map(asList) : 'Loading...'}</Card.Text>
              <Card.Text>Steps :<ul>{project.steps ? project.steps.map(asList) : 'Loading...'}</ul></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default withRouter(Project)

// const StepList = () => (
//   <div>
//     <ul>
//       {steps.filter((step) => (
//         <li key={step}> {step} </li>
//       ))}
//     </ul>
//   </div>
// )
// const newStepList = project.steps.map()
// console.log(newStepList)
// const stepList = project.steps.map((item) => (<Col xs={12} md={6} lg={4} xl={4} key={item.id}>
//   <Card className='m-auto'>
//     <Card.Body>
//       <Card.Title >{item.name}</Card.Title>
//     </Card.Body>
//   </Card>
// </Col>
// ))
// const projectList = steps.map((item) => (
//   <Col xs={12} md={6} lg={4} xl={4} key={item} style={cardCol}>
//     <Card style={card} className='m-auto'>
//       <Card.Img variant='top' src={`${item}`} style={cardImg} />
//       <Card.Body style={cardBody}>
//         <Card.Title style={cardTitle}>{item}</Card.Title>
//       </Card.Body>
//     </Card>
//   </Col>
//   // <div key={item._id} className='col-3 mt-5'>

//   // </div>
// ))