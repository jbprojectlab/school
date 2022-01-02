import React from 'react'
import Routes from '../routes'
import {Link} from 'react-router-dom'
import Nav from './nav'

const Root = (props) => {
  return (
    <div>
      <Nav />
      <main>
        <Routes />
      </main>
    </div>
  )
}

export default Root
