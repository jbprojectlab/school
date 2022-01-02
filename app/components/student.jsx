import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getStudent, studentSelector} from '../reducers/students'

class Student extends Component {
	componentDidMount() {
		this.props.fetchStudent()
	}

	render() {
		const {student} = this.props

		return student ? (
      <div>
        <div>
          <h4>First name:</h4>
          <p>{student.firstName}</p>
        </div>
        <div>
          <h4>Last name:</h4>
          <p>{student.lastName}</p>
        </div>
        <div>
          <h4>Email:</h4>
          <p>{student.email}</p>
        </div>
        <div>
          <h4>Photo:</h4>
          <img src={student.imageURL} />
        </div>
        <div>
          <h4>GPA:</h4>
          <p>{student.gpa}</p>
        </div>
        <div>
          {student.campus ? (
            <div>
              <h4>Campus:</h4>
              <Link to={`/campuses/${student.campus.id}`}>
                <p>{student.campus.name}</p>
              </Link>
            </div>
          ) : (
            <p>Not assigned to campus</p>
          )}
        </div>
      </div>
    ) : null
  }
}

const getId = props => Number(props.match.params.id)

const mapStateToProps = (state, ownProps) => ({
	student: studentSelector(state.students, getId(ownProps))
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchStudent: () => dispatch(getStudent(getId(ownProps)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Student)