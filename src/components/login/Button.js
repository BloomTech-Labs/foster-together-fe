import React, { Component } from 'react'
import { withAuth } from '@okta/okta-react'

export default withAuth(
  class Button extends Component {
    constructor(props) {
      super(props)
      this.state = { authenticated: null }
      this.checkAuthentication = this.checkAuthentication.bind(this)
      this.checkAuthentication()

      this.checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated()
        if (authenticated !== this.state.authenticated) {
          this.setState({ authenticated })
        }
      }
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated()
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated })
      }
    }

    async componentDidUpdate() {
      this.checkAuthentication()
    }

    async componentDidMount() {
      this.checkAuthentication()
    }

    login = async () => {
      this.props.auth.login('/login')
    }

    logout = async () => {
      this.props.auth.logout('/login')
    }

    render() {
      if (this.state.authenticated === null) return null

      const mainContent = this.state.authenticated ? (
        <div>
          <button onClick={this.logout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={this.login}>Login</button>
        </div>
      )

      return <div>{mainContent}</div>
    }
  }
)
