import React from 'react';
import './navbar.scss'
//const dw = require('file!img!./dw.svg');


const  brand = {
	//src: dw,
	href: 'http://www.designworks.com',
	alt: 'Designworks.com'

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
		      		<a href="">+ d@davidbastian.cl</a>
		      	</li>
		      </ul>

      	</nav>
    );
  }
}
