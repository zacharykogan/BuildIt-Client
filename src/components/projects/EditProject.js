import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ProjectForm from '../forms/ProjectForm'
import { updateProject } from '../../api/projects'

class EditProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      project: {},
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/my-projects/${this.props.match.params.id}`)
      .then(res => this.setState({ project: res.data.project }))
      .catch(console.error)
  }
  /*
  Async/Await version:
  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/books/${this.props.match.params.id}`)
      this.setState({ book: response.data.book })
    } catch (err) {
      console.error(err)
    }
  }
  */

  handleChange = (event) => {
    const updatedProject = this.state.project
    updatedProject[event.target.name] = event.target.value
    this.setState({
      project: updatedProject
    })
  }

  arrayMaker = (input) => {
    return input.split(',')
  }

  handleArrayChange = (event) => {
    event.preventDefault()
    const updatedProject = this.state.project
    const inputList = this.arrayMaker(event.target.value)
    updatedProject[event.target.name] = inputList
    this.setState({
      project: updatedProject
    })
  }

  //  updatedField)

  //     this.setState({ project: editedProject })   const editedProject = Object.assign(this.state.project,

  handleSubmit = event => {
    event.preventDefault()
    const project = this.state.project
    const { user } = this.props

    updateProject(this.props.match.params.id, project, user)
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { project, updated } = this.state
    const { handleChange, handleSubmit, handleArrayChange } = this

    if (updated) {
      return <Redirect to={`/my-projects/${this.props.match.params.id}`} />
    }

    return (
      <>
        <ProjectForm
          project={project}
          formHandler={handleSubmit}
          changeHandler={handleChange}
          listHandler={handleArrayChange}
        />
      </>
    )
  }
}

export default withRouter(EditProject)
