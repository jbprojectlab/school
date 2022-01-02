import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import history from './history'
import store from './store'
import Root from './components/root'

render(
  <Provider store={store}>
    <Router history={history}>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('main')
)
