const defaultState = {
  counter: 0,
  isLoggedIn: false,
  token: '',
}
const counterReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...prevState,
        counter: prevState.counter++,
      }
    case 'DECREMENT':
      return {
        ...prevState,
        counter: prevState.counter--,
      }
  }
  return prevState
}

const store = createStore(counterReducer)

export default store
