import React from 'react'
import Routes from '../routes'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/campuses">CAMPUSES</Link>
        <Link to="/students">STUDENTS</Link>
      </nav>
    </div>
  )
}

export default Nav
