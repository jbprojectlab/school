import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCampus, campusSelector} from '../reducers/campuses'

class Campus extends Component {
	componentDidMount() {
		this.props.fetchCampus()
	}

	render() {
    const {campus} = this.props

		return campus ? (
      <div>
        <h4>{campus.name}</h4>
        <img src={campus.imageURL} />
        <div>
          <h5>Address:</h5>
          <p>{campus.address}</p>
        </div>
        <p>{campus.description}</p>
        <div>
          <h5>Students:</h5>
          <ul>
            {!campus.students ? null : campus.students.length ? campus.students.map(student => (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>
                  {student.firstName + ' ' + student.lastName}
                </Link>
              </li>
            )) : (
              <p>No students enrolled</p>
            )}
          </ul>
        </div>
      </div>
    ) : (
      <div>No Campus Found</div>
    )
  }
}

const getId = props => Number(props.match.params.id)

const mapStateToProps = (state, ownProps) => ({
	campus: campusSelector(state.campuses, getId(ownProps))
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCampus: () => dispatch(getCampus(getId(ownProps)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Campus)

