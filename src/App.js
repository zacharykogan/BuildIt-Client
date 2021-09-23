/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Projects from './components/projects/Projects'
import Project from './components/projects/Project'
import CreateProject from './components/projects/CreateProject'
import MyProjects from './components/projects/MyProjects'
import MyProject from './components/projects/MyProject'
import { index } from './api/projects'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: [],
      owner: this.user,
      projects: []
    }
  }

  componentDidMount () {
    // api call for
    index()
      .then((res) => this.setState({ projects: res.data.projects }))
      .catch(console.error)
  }

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  render () {
    const { msgAlerts, user, projects } = this.state

    return (
      <Fragment>
        <Header user={user} projects={projects} />
        {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className='container'>
          <Route
            path='/sign-up'
            render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <Route
            path='/sign-in'
            render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )}
          />
          <Route
            exact
            path='/projects'
            render={() => (
              <Projects msgAlert={this.msgAlert} projects={projects} />
            )}
          />
          <Route
            exact
            path='/projects/:id'
            render={() => (
              <Project
                msgAlert={this.msgAlert}
                user={user}
                projects={projects}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path='/my-projects'
            render={() => (
              <MyProjects
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/my-projects/:id'
            render=
              {() => (
                <MyProject
                  msgAlert={this.msgAlert}
                  clearUser={this.clearUser}
                  user={user}
                />
              )}
          />
          <AuthenticatedRoute
            user={user}
            path='/create-project'
            render={() => (
              <CreateProject
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/sign-out'
            render={() => (
              <SignOut
                msgAlert={this.msgAlert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path='/change-password'
            render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )}
          />
        </main>
      </Fragment>
    )
  }
}

export default App
