import React from 'react'
// import Routes from '../routes'
// import {Home} from './components/home'
import {Route, Switch} from 'react-router-dom'
import Campuses from './campuses'
import {Students} from './students'

const Home = (props) => {
  return (
    <div>
      <nav>
        Welcome!
      </nav>
      <main>
        <h1>Welcome to the Simba School of JavaScript!</h1>
        <Switch>
          <Route exact path='/campuses' component={Campuses} />
          <Route exact path='/students' component={Students} />
        </Switch>
      </main>
    </div>
  )
}

export default Home
