import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, RouteHandler  } from 'react-router'
import './about.scss'


class About extends React.Component {

constructor(props) {
    super(props); 
  }

  render() {
    return (
	 		<div className="container about">
					<h2>I am a Designer & Web Developer from Viña del Mar (Chile), based in New Zealand. I love to enjoy good art, Conceptualising and Designing simple and clean interfaces.</h2>

<h2>I work through multiples design disciplines, such as Interactive, Illustration, Web Development, Art Direction & Photography. For each project always I choose the one that have the major impact. 
I believe in the value of a good idea and the trends changes.</h2>
<h2>It is not enough look the web as a piece of design, Also need its comprehension and a deep knowledge of the Social & Cultural Environment, History Art, Composition & Color Theory.</h2>   
  </div>)


}



}


module.exports =  About;
