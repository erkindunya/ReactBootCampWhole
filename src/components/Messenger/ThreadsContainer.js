import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Threads from './Threads'

class ThreadsContainer extends Component {
  constructor(props) {
    super(props)

    // hint, add some state here
    this.state = {
      threads: []
    }
  }

  componentDidMount() {
    // hint, you should fetch the threads here
  }

  render() {
    const { showSettings, newMessage, history, match } = this.props
    const { threads } = this.state

 
       return
       <Threads 
       threads={threads} 
       history={history} 
       match={match} 
       />
      // hint, which component and props do you think we should return here?
      
  }
}

export default withRouter(ThreadsContainer)
