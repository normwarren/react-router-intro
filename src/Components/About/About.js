import React from 'react'
import {Link} from 'react-router-dom'

const About = (props) => (
	<div>
		<h1>About</h1>
    <Link to='/about/story'>Our Story</Link>
    <Link to='/about/faq'>FAQ</Link>
    {/* using props.children to dynamically display either the Story or FAQ component */}
    {props.children}
	</div>
)

export default About
