import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import apiUrl from '../../apiConfig'

// const cardImg = {
//   margin: 'auto',
//   padding: '25px',
//   width: 'auto'
// }

// const cardCol = {
//   margin: 'auto',
//   marginTop: '10px'
// }

// const cardTitle = {
//   height: '50px'
// }

// const cardBody = {
//   backgroundColor: 'black',
//   borderRadius: '0px 0px 8px 8px',
//   color: 'white'
// }

// const card = {
//   border: 'none',
//   borderRadius: '10px'
// }

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
    const steps = project.steps
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
    return (
      <div>
        <ul>
          {project.name}
          {project.image}
          {project.tools}
          {project.materials}
          {steps}
        </ul>
      </div>
    )
  }
}

export default withRouter(Project)
