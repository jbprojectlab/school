import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import history from './history'
import store from './store'
import Home from './components/home'

render(
  <Provider store={store}>
    <Router history={history}>
      <Home />
    </Router>
  </Provider>,
  document.getElementById('main')
)
