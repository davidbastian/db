import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, RouteHandler  } from 'react-router'
import './introduction.scss'

import gsap from 'gsap'  
import zepto from 'npm-zepto'

import p from 'json!../projects/projects.json'
const pjson = p.projects


import jquerymousewheel from 'jquery-mousewheel'  


class Introduction extends React.Component {




scrollFunction() {

    $("#main").on('mousewheel', function(event, delta) {
            this.scrollLeft -= (delta * 2);
            event.preventDefault();
    });
}


componentWillMount() {
     this.scrollFunction();
}


  render() { 

    

    return (
      <div className="slides"> 

                {
                          pjson.map(
                            a => 
                                <Link key={a.slug} className="slideItem"  to={`${a.slug.toLowerCase().split(' ').join('-')}`}>
                                    <img key={a.img} src={a.img} alt={a.slug}/>
                                    <p key={a.role}> {a.slug} — <span className="role" key={a.role}>{a.role}</span></p>
                               </Link>
                          )
                }
	
      </div>
    );
  }
}

module.exports =  Introduction;
