import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, RouteHandler  } from 'react-router'
import './introduction.scss'

import p from 'json!../projects/projects.json'
const pjson = p.projects

class Introduction extends React.Component {

  render() { 
   
    return (

      <div className="slides"> 
      	<div className="slide">
                 
                {
                          pjson.map(

                            a => 
                                <Link activeClassName="active" key={a.name} className="slideItem"  to={`${a.name.toLowerCase().split(' ').join('-')}`}>
                                    <img  key={a.img} src={a.img} alt={a.description}/>
                                    <p key={a.name}> {a.name} — <span className="role" key={a.role}>{a.role}</span></p>
                               </Link>
                          )
                           
                }
                
		    </div>
      </div>
    );
  }
}

module.exports =  Introduction;
