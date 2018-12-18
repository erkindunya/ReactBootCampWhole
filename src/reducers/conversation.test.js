import {
  receiveConversation,
  RECEIVE_CONVERSATION
} from '../actions/conversation'

import conversationReducer from './conversation'
import thread from './thread';

/*
What BEHAVIOUR do we have to test?
Task 1, write the describe and its
Task 2, implement the expectations
*/
describe('Conversation reducer', () => {
  it(`should return the default state if no state is provided
  `, () => {
  const actualState = uiReducer(undefined, { type: "NO_RELEVANT_ACTION" })
  const expectedState = getInitialState()

  expect(expectedState).toEqual(actualState)
})

  it(`should return the current state if no state is provided
    `, () => {
      const actualState = uiReducer(undefined, { type: "NO_RELEVANT_ACTION" })
      const expectedState = getInitialState()
    
      expect(expectedState).toEqual(actualState)
    })
  })

  it(`should return a new state if it receives a receive Conversation action
    `, () => {
      const actualState = uiReducer(undefined, { type: "NO_RELEVANT_ACTION" })
      const expectedState = getInitialState()
    
      expect(expectedState).toEqual(actualState)
    })