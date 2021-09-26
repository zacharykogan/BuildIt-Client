import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createProject, index } from '../../api/projects'
import { createProjectFailure, createProjectSuccess } from '../AutoDismissAlert/messages'
import ProjectForm from '../forms/ProjectForm'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

class CreateProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      project: {}
    }
  }

  handleChange = (event) => {
    const updatedProject = this.state.project
    updatedProject[event.target.name] = event.target.value
    this.setState({
      project: updatedProject
    })
  }

  onCreateProject = (event) => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    createProject(this.state.project, user)
      .then((res) => console.log(res.data.user))
      .then(() =>
        msgAlert({
          heading: 'Project Created Success',
          message: createProjectSuccess,
          variant: 'success'
        })
      )
      .catch(console.error)
      .then(
        index().then((res) => this.setState({ projects: res.data.projects }))
      )
      .then(() => history.push('/my-projects'))
      .catch((error) => {
        this.setState({
          name: '',
          category: '',
          description: '',
          image: '',
          tools: '',
          materials: '',
          steps: []
        })
        msgAlert({
          heading: 'Create Project Failed with error: ' + error.message,
          message: createProjectFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <ProjectForm
        formHandler = {this.onCreateProject}
        changeHandler = {this.handleChange}
      />
    )
  }
}

export default withRouter(CreateProject)
