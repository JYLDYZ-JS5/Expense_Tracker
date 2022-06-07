import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './action/store/indexReduce'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
