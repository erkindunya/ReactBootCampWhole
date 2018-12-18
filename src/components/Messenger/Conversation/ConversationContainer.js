import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import * as api from '../../../api/message'
import Conversation from './Conversation'

import {receiveConversation} from '../../actions'

class ConversationContainer extends Component {
 // state = {
   // conversation: []
  //}

  componentDidMount() {
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = async (username) => {
    const conversation = await api.fetchConversation(username)
    //this.dispatch({ conversation })
    this.props.receiveConversation(conversation)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchConversation(nextProps.match.params.username)
    }
  }

  render() {
    const { match, conversation } = this.props
    // const { match } = this.props
    // const { conversation } = this.state

    return (
      <Conversation
        conversation={conversation}
        match={match}
      />
    )
  }
}

ConversationContainer.propTypes = {
  match: PropTypes.object.isRequired,
  conversation: PropTypes.array.isRequired,
  receiveConversation: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  conversation: state.conversation
})
const mapDispatchToProps = (dispatch) => ({
  dispatch
})

const mapStateToDispatch = {
  receiveConversation
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConversationContainer))
