import React from 'react'
// importing Switch and Route. We utilize these to dynamically display different components on the screen
import { Switch, Route } from 'react-router-dom'

// importing our Components to use
import Home from './Components/Home'
import About from './Components/About/About'
import Artists from './Components/Artist/Artists'
import Story from './Components/About/Story'
import FAQ from './Components/About/FAQ'
import Artist from './Components/Artist/Artist'

// we just export the entire Switch component
export default (
	<Switch>
    {/* the route component looks for a path and a component to dipslay when we go to that path */}
		<Route exact path='/' component={Home} />
    {/* here instead of displaying a single component, we use what is called a renderprop to display our About component and another Switch component. This is called a sub route */}
    {/* When we use a custom component and try to display components inside of it, we must use props.children in the component (our About component in this case) */}
		<Route
			path='/about'
			component={() => (
				<About>
					<Switch>
						<Route path='/about/story' component={Story} />
						<Route path='/about/faq' component={FAQ} />
					</Switch>
				</About>
			)}
		/>
		<Route path='/artists' component={Artists} />
    {/* using a param we call id */}
		<Route path='/artist/:id' component={Artist} />
	</Switch>
)
