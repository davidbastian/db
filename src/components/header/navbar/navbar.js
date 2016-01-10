import React from 'react';
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
			<a href={brand.href} id="logo" target="_blank">  
				David Bastian.
			</a>

		      <ul id="menu">
		      	<li>
		      		<a href="">+ About me</a>
		      	</li>
		      	<li>
		      		<a href="mailto:d@davidbastian.cl">+ d@davidbastian.cl</a>
		      	</li>
		      </ul>

      	</nav>
    );
  }
}
