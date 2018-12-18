import { combineReducers } from 'redux'
import {
    RECEIVE_THREAD,
    TOGGLE_MESSAGE_DETAIL,
    RECEIVE_MESSAGE, RECEIVE_CONVERSATION
} from '../actions'

export function uiReducer(state = { isMessageDetailOpen: false }, action) {
    switch (action.type) {
        case TOGGLE_MESSAGE_DETAIL:
            return {isMessageDetailOpen: true}
        default:
            return state
    }
}

export function threadReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_THREAD:

            return action.thread


        default:
            return state
    }
}

export function conversationReducer(state = [], action) {

    console.log(state , action)
    switch (action.type) {
        case RECEIVE_CONVERSATION:
            console.log(action)
            return action.conversation
        case RECEIVE_MESSAGE:
            return [...state,action.message]
        default:
            return state
    }
}

export default combineReducers({
    ui: uiReducer,
    thread: threadReducer,
    conv: conversationReducer,
    // combineReducers can combine as many reducers as you need
})
