import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, RouteHandler  } from 'react-router'
import './about.scss'

import DocumentMeta from 'react-document-meta'

class About extends React.Component {

constructor(props) {
    super(props); 
  }

  render() {
  	const meta = {
      title: 'David Bastian. — About me',
      description: 'I am a Designer & Web Developer from Viña del Mar (Chile), but I am based in New Zealand. I love to enjoy and create Good Art, Conceptualising and Designing simple and clean interfaces.',
      //canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'design,art direction,creative,product design,interaction design,interfaces design,chile,web,frontend,backend,reactjs,angularjs.'
        }
      }
    };

    return (
	 		<div className="container about">
	 		<DocumentMeta {...meta} />
					<h2>I am a Designer & Web Developer from Viña del Mar (Chile), but I am based in New Zealand. I love to enjoy and create Good Art, Conceptualising and Designing simple and clean interfaces.</h2>
 </div>)


}



}


module.exports =  About;
