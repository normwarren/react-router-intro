import React, { Component } from 'react'
// import HashRouter. We use this in App so our entire App can have the ability to route
import { HashRouter } from 'react-router-dom'
import Nav from './Components/Nav'
// import our separate router so our App.js file doesn't look like a dump
import router from './router'

class App extends Component {
	render() {
		return (
      // wrapping HashRouter around everything
			<HashRouter>
				<div>
					<Nav />
          {/* here we have to wrap router in curlys because we import just a reference to the Switch component. It is similar to a variable */}
					{router}
				</div>
			</HashRouter>
		)
	}
}

export default App
