import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getStudents} from '../reducers/students'

class Students extends Component {
	componentDidMount() {
		this.props.fetchStudents()
	}

	render() {
		const {students} = this.props
		return (
      <div className="student-list">
        <h3>Students:</h3>
        <ul>
          {students && students.map(student => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                <h4>{student.firstName + ' ' + student.lastName}</h4>
                <img src={student.imageURL} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({students}) => ({students})
const mapDispatchToProps = (dispatch) => ({fetchStudents: () => dispatch(getStudents())})

export default connect(mapStateToProps, mapDispatchToProps)(Students)
