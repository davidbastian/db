import React from 'react'
import ReactDom from 'react-dom'  
import { Router, Route, IndexRoute, Link, IndexLink, RouteHandler  } from 'react-router'

import './introduction.scss'

import gsap from 'gsap'  
import scrolltoplugin from '../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'
import zepto from 'npm-zepto'
import imagesLoaded from 'imagesLoaded'


import DocumentMeta from 'react-document-meta'

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
   var el= $(window), 
  scrollTime = 2,
  scrollDistance = 200, 

    evt=window.event || e,
    delta=evt.detail? evt.detail/ 3 : evt.wheelDelta/ 120,
    scrollLeft = el.scrollLeft(),
    finalScroll = scrollLeft - parseInt((delta * scrollDistance), 10);


    //console.log(finalScroll) 

    TweenMax.to(el, scrollTime, {
                    scrollTo: {
                        x: finalScroll
                    },
                    ease: Expo.easeOut, 
                    overwrite: 5
                });

}
 
    var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" 
 
    if (document.attachEvent) {
        document.attachEvent("on"+mousewheelevt, displaywheel)
    }
    else if (document.addEventListener){
        document.addEventListener(mousewheelevt, displaywheel, false)
    }




}


mouseFunction(){
  $('.slides').mousemove(function(e){
                        var x = e.clientX - this.offsetLeft,
                            w = document.body.offsetWidth,
                            per = ((x*100)/w),
                            slidesSize = $('.slideItem').size(),
                            cpos = $('.container').offset().left - $(window).scrollLeft(),
                            slideWidth = $('.slideItem').width(),
                            average = ((slidesSize*slideWidth) + (cpos - 20)) - w;

                       TweenMax.to( $(window), 4, {scrollTo:{x:(per*average)/100}, ease:Power3.easeOut});

        });

}

componentDidMount() {
        this.preloadFunction(); 
        this.scrollFunction(); 
        //this.mouseFunction();  

        
}


render() { 

    const meta = {
      title: 'David Bastian. Chilean Designer & Web Developer.',
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
      <div className="slides" key="inner0"> 
      <DocumentMeta {...meta} />

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
