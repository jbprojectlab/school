import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCampuses} from '../reducers/campuses'

class Campuses extends Component {
	componentDidMount() {
		this.props.fetchCampuses()
	}

	render() {
		const {campuses} = this.props

		return (
      <div className="campus-list">
        <h3>Campuses:</h3>
        <ul>
          {campuses && campuses.map(campus => (
            <li key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <h4>{campus.name}</h4>
                <img src={campus.imageURL} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({campuses}) => ({campuses})
const mapDispatchToProps = (dispatch) => ({fetchCampuses: () => dispatch(getCampuses())})

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)
