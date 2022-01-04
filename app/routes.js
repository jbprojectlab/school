import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/home'
import Campuses from './components/campuses'
import Campus from './components/campus'
import Students from './components/students'
import Student from './components/student'
import NotFound from './components/not-found'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/campuses" component={Campuses} />
    <Route exact path="/students" component={Students} />
    <Route exact path="/campuses/:id" component={Campus} />
    <Route exact path="/students/:id" component={Student} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
