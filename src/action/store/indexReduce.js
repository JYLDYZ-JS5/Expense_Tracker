import { createStore } from 'redux'
import reducerFunc from '../reducer/reducer'

 const store = createStore(reducerFunc)
export default store