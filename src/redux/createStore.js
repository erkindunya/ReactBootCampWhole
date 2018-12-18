// This is an simplified version of Redux, there is no initial state, middleware, etc.
// The idea is to show the basics of Redux

export const createStore = (reducer) => {
  let state = reducer(undefined, { type: '@INIT' })// does it has state
  let listeners = [] // three state

  const getState = () => { return state}

  const dispatch = (action) => {// call reducer with action
    state = reducer(state,action)// all reducer will recive all action, all the state it care about
    listeners.forEach(listener => listener())// all commponent are connected
  }

  const subscribe = listener => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(item => item !== listener)
    }
  }

  return {getState,dispatch,subscribe}
}
