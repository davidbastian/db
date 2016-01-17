import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, RouteHandler  } from 'react-router'
import './introduction.scss'

import gsap from 'gsap'  
import scrolltoplugin from '../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'
import zepto from 'npm-zepto'

import p from 'json!../projects/projects.json'
const pjson = p.projects



class Introduction extends React.Component {




scrollFunction() {

function displaywheel(e){
   var el= $(window), //Window object
  scrollTime = 2,
  scrollDistance = 200, //Distance. Use smaller value for shorter scroll and greater value for longer scroll

    evt=window.event || e,//equalize event object
    delta=evt.detail? evt.detail/ 3 : evt.wheelDelta/ 120,//check for detail first so Opera uses that instead of wheelDelta
    scrollLeft = el.scrollLeft(),
    finalScroll = scrollLeft - parseInt((delta * scrollDistance), 10);


    //console.log(finalScroll) 

    TweenMax.to(el, scrollTime, {
                    scrollTo: {
                        x: finalScroll
                    },
                    ease: Expo.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
                    overwrite: 5
                });

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
