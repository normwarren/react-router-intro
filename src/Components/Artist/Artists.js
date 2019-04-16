import React, { Component } from 'react'
import { getAllArtists } from '../../artist-service'
import { Link } from 'react-router-dom'

class Artists extends Component {
	// set some initial state
	constructor(props) {
		super(props)
		this.state = {
			artists: []
		}
	}

	componentDidMount() {
		// get all of our artists with our helper function
		// this takes the place of an axios request
		let artists = getAllArtists()
		// using the object shorthand syntax for setting state
		this.setState({
			artists
		})
	}

	render() {
		// dynamically creating a list of artists
		const artistData = this.state.artists.map((a, index) => (
			// the Link component requires on props, to. It dictates where it will route to
			<Link to={`/artist/${a.id}`} key={index}>
				<li>{a.name}</li>
			</Link>
		))

		return (
			<div>
				<h1>Artists</h1>
				<ul>{artistData}</ul>
			</div>
		)
	}
}

export default Artists
