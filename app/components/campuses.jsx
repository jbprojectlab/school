import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCampuses} from '../reducers/campus'

class Campuses extends Component {
	componentDidMount() {
		this.props.fetchCampuses()
	}

	render() {
		const {campuses} = this.props
		return (
      <div>
        <h3>Campuses:  </h3>
        <ul>
          {campuses && campuses.map(campus => (
            <li>
              <h4>{campus.name}</h4>
              <img src={campus.imageURL} />
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
