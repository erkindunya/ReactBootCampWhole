import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as api from '../../../api/message'
import Conversation from './Conversation'
import {receiveConversation} from "../../../actions";
import {withRouter} from "react-router";

class ConversationContainer extends Component {
  state = {
    conversation: []
  }

  componentDidMount() {
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = async (username) => {
    const conversation = await api.fetchConversation(username)
      console.log(conversation)
      this.props.dispatch(receiveConversation(conversation))
    //this.setState({ conversation })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchConversation(nextProps.match.params.username)
    }
  }

  render() {
    const { match ,conversation} = this.props
    //const { conversation } = this.state

    return (
      <Conversation
        conversation={conversation}
        match={match}
      />
    )
  }
}

const mapStateToProps = (state) => ({
    conversation: state.conv
})

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

ConversationContainer.propTypes = {
  match: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConversationContainer))
