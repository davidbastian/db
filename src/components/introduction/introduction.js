import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, RouteHandler  } from 'react-router'
import './introduction.scss'

import gsap from 'gsap'  
import scrolltoplugin from '../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'
import zepto from 'npm-zepto'
import imagesLoaded from 'imagesLoaded'

import p from 'json!../projects/projects.json'

const pjson = p.projects


class Introduction extends React.Component {



preloadFunction(){

     function listo() {
        console.log('listo')
     }

          var imgLoad =  imagesLoaded('.slides'),
              countB = 0,
              imaSize = $('.slides').find('img').size(),
              mediaSize = $('.slides').find('.slideItem').size(),
              averageImage = (imaSize*100)/mediaSize;



          imgLoad.on( 'progress', function( instance, image ) {
            var result = image.isLoaded ? 'loaded' : 'broken';
            var ima = (((countB = countB + 1) * averageImage) / imaSize);

              console.log('loading-image:' +  ima + '% ' + image.img.src);

              if (ima === 100) {                                 
               listo();
              }
          });      
  }



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
        //preloadFunction
        this.preloadFunction(); 
        this.scrollFunction();  
  }


/*componentWillAppear(callback) {
    this.hola(callback);
}

componentWillLeave(callback) {
    this.chao(callback);
}


hola(callback){
    console.log('appear')
}

chao(callback){
    console.log('leave')

    setTimeout(function(){
            $('.slideItem').css('opacity',0);

    },2000)
   
}*/



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
