import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Card, Col, Row, Breadcrumb } from 'react-bootstrap'

const cardImg = {
  margin: 'auto',
  padding: '25px',
  width: 'auto',
  height: '200px'
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

const card = {
  border: 'none',
  borderRadius: '10px'
}

const breadcrumbs = {
  fontSize: '12px',
  textDecoration: 'none'
}

const Projects = (props) => {
  // coming in from props, from clicking on the dropdown menu
  const { category, projects, setCategory } = props

  const filteredProjects = projects.filter((item) => {
    if (category === 'All Projects') {
      return item.category
    } else {
      return item.category === category
    }
  })

  console.log(projects)

  const projectList = filteredProjects.map((item) => (
    <Col xs={12} md={6} lg={4} xl={4} key={item._id} style={cardCol}>
      <Card style={card} className='m-auto'>
        <Link style={{ margin: 'auto' }} to={`/projects/${item._id}`}>
          <Card.Img variant='top' src={`${item.image}`} style={cardImg} />
        </Link>
        <Card.Body style={cardBody}>
          <Card.Title style={cardTitle}>{item.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
    // <div key={item._id} className='col-3 mt-5'>

    // </div>
  ))

  return (
    <Row>
      <Breadcrumb className='mt-3' style={breadcrumbs}>
        <Breadcrumb.Item>
          <Link to={'/'}>
            home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={'/projects'} onClick={() => setCategory('All Projects')}>
            Projects
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{category}</Breadcrumb.Item>
      </Breadcrumb>
      <h3 className='text-light mt-5'>{category}</h3>
      <Col xs={12} style={{ marginTop: '10px' }}>
        <Row>{projectList}</Row>
      </Col>

      <div className='col-12 mt-5'></div>
    </Row>
  )
}

export default withRouter(Projects)
