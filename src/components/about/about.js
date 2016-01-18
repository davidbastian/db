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
					<h2>I am a Designer & Web Developer from Viña del Mar (Chile), based in New Zealand. I love to enjoy and create Good Art, Conceptualising and Designing simple and clean interfaces.</h2>
 </div>)


}



}


module.exports =  About;
