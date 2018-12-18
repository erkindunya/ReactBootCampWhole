import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  constructor() {
    super()

    // Here you'll need to set up the state of the form
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (name, event) => { // set request paramter and keep that and pass it to event handler
    
    let change = {
      [name]: event.target.value
    }
    this.setState(change)
    /*
      explanation about the expression: change[name]
      change.email = event  // the change variable is an object and so you can add a property by doing .name_of_the_property
      change["email"] = event // the change variable is an object and so you can add a property by doing ["string_with_the_name_of_the_property_notice_the_quotes"]
      change[name] = event // the change variable is an object and so you can add a property by doing [variable_with_the_name_of_the_property_notice_no_quotes]
    */
    
    //You need to set the change object in the state of the component
  }

  handleSubmit = async (e) => {
    // When the button(which type=submit) is clicked, we can stop the form submission by doing:
    e.preventDefault()

    const { history } = this.props
    const { password, email } = this.state
    if (!password || !email) {
      alert('Email and password are required')
      return
    }
    // You can add some validation here to make sure password and email are provided

    const { status } = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ password, email })
    })

    if (status === 200) {
      // Here you need to "send" the user to '/'
      history.push('/')
    }
  }

  render () {
    console.log(this.state)
    return (
      <form className="form-signin">
        <div className="form-group">
          <h2 className="form-signin-heading">Please sign in</h2>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={this.state.email}
            onChange={e => this.handleChange('email', e)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={this.state.password}
            onChange={e => this.handleChange('password', e)}

          />
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block"
          onClick={this.handleSubmit}
        >
          Sign in
        </button>
      </form>
    )
  }
}

export default Login
