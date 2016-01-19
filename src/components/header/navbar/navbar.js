import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, RouteHandler  } from 'react-router'
import './navbar.scss'

const  brand = {
	href: 'http://www.davidbastian.cl',
	alt: 'David Bastian.cl'

}

//console.log(dw)

export default class navbar extends React.Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return (
		<nav>
			<Link key="home"  to="/" id="logo" >  
				David Bastian.
			</Link>

		      <ul id="menu">
		      	<li>

		      		<Link key="about"  to="about">
                                    + About me
                               </Link>


		      	</li>
		      	<li>
		      		<a href="mailto:d@davidbastian.cl">+ d@davidbastian.cl</a>
		      	</li>
		      </ul>

      	</nav>
    );
  }
}
