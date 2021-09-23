import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { myProjects } from '../../api/projects'

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
const button = {
  width: 'inherit'
}
const handleDelete = (id, user) => {
  console.log('Clicked Delete')
}

class MyProject extends Component {
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
          <Link style={{ margin: 'auto' }} to={`/projects/${item._id}`}>
            <Card.Img variant='top' src={`${item.image}`} style={cardImg} />
          </Link>
          <Card.Body style={cardBody}>
            <Card.Title style={cardTitle}>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button style={button} margin='auto' variant=''>
              Update
            </Button>
            <Button style={button} onClick={handleDelete} data={item._id} variant='primary'>
              Delete
            </Button>{' '}
          </Card.Body>
        </Card>
      </Col>
      // <div key={item._id} className='col-3 mt-5'>

      // </div>
    ))
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
      <Row>
        <h3 className='text-light mt-5'></h3>
        <Col xs={12} style={{ marginTop: '10px' }}>
          <Row>{projectList}</Row>
        </Col>
        <div className='col-12 mt-5'></div>
      </Row>
      //   <Row>
      //     <Col xs={10} md={8} style={cardCol}>
      //       <Card style={card} className='m-auto'>
      //         <Card.Img variant='top' src={`${projects.image}`} style={cardImg} />
      //         <Card.Body style={cardBody}>
      //           <Card.Title style={cardTitle}>{projects.name}</Card.Title>
      //           <Card.Text>Tools : {projects.tools}</Card.Text>
      //           <Card.Text>Materials : {projects.materials}</Card.Text>
      //           <Card.Text>Steps : {projects.steps}</Card.Text>
      //         </Card.Body>
      //       </Card>
      //     </Col>
      //   </Row>
    )
  }
}

export default withRouter(MyProject)
