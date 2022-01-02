import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home} from './components/home'
import {Campuses} from './components/campuses'
import {Students} from './components/students'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/campuses" component={Campuses} />
    <Route exact path="/students" component={Students} />
  </Switch>
)

export default Routes
