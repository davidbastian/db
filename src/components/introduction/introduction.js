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

    require('mouse-wheel')

    (function(dx, dy) {
      console.log('pluging:' + dy)

    })

function displaywheel(e){
    var evt=window.event || e //equalize event object
    var delta=evt.detail? evt.detail/ 3 : evt.wheelDelta/ 120//check for detail first so Opera uses that instead of wheelDelta


    console.log(delta) //delta returns +120 when wheel is scrolled up, -120 when down


}
 
var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
 
    if (document.attachEvent) {//if IE (and Opera depending on user setting)}
        document.attachEvent("on"+mousewheelevt, displaywheel)
    }
    else if (document.addEventListener){ //WC3 browsers
        document.addEventListener(mousewheelevt, displaywheel, false)
    }




}

componentDidMount() {
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
