import React from 'react'
import ReactDom from 'react-dom'  
import { Router, Route, IndexRoute, Link, IndexLink, RouteHandler  } from 'react-router'

import './projects.scss'
import gsap from 'gsap'  
import scrolltoplugin from '../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'


import zepto from 'npm-zepto'

import imagesLoaded from 'imagesLoaded'

import DocumentMeta from 'react-document-meta'

import p from 'json!./projects.json'
const pjson = p.projects


class Video extends React.Component {

componentDidMount() {
     var node = ReactDom.findDOMNode(this.refs.video);

}

render(){
     return (
          <video preload="auto" ref='video' loop="true" autoPlay>
            <source src={this.props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      )  
  }
}

class Image extends React.Component {
  componentDidMount() {
     // console.log(ReactDom.findDOMNode(this.refs.one));
  }
  render(){
     return (
          <img ref='one' src={this.props.image} alt={this.props.type} />   
      )   
  }
}
export default class projects extends React.Component {

  preloadFunction(){

     function listo() {
        console.log('listo');


        TweenLite.to($('h2  small'), .8,{
                opacity: '1',
                ease: Power4.easeOut
        });

        TweenLite.fromTo($('h2  div span'), 1, {
                opacity: '0',
                y: '50px'
            }, {
                opacity: '1',
                y: '0px',
                ease: Power4.easeOut
        });

      }

          var imgLoad =  imagesLoaded('.media-container'),
              countB = 0,
              imaSize = $('.media-container').find('img').size(),
              videoSize = $('.media-container').find('video').size(),
              mediaSize = $('.media-container').find('.media').size(),
              averageImage = (imaSize*100)/mediaSize,
              averageVideo = (videoSize*100)/mediaSize;


          imgLoad.on( 'progress', function( instance, image ) {
            var result = image.isLoaded ? 'loaded' : 'broken';
            var ima = (((countB = countB + 1) * averageImage) / imaSize);

              console.log('loading-image:' +  ima + '% ' + image.img.src);

              if (ima === 100) {                                 
               listo();
              }
          });

          imgLoad.on( 'done', function( instance ) {
                   $('video').each(function(i,elm){
                // do stuff 
                    var video =  $(this)[0];

                                      function checkLoad() {
                                          if (video.readyState === 4) {

                                                var vid = (((countB = countB + 1) * averageVideo) / videoSize);

                                             console.log('loading-video:' +  vid + '% ' + video.firstChild.getAttribute("src"));

                                             setTimeout(function(){
                                               
                                                video.play();

                                                if (vid === 100) {
                                                  listo();
                                                }

                                              },500)

                                          } else {
                                              setTimeout(checkLoad, 100);
                                          }
                                      }
                                      checkLoad();


                  });
          });
          
  }

  

  scrollFunction() {
  
  function displaywheel(e){
     var el= $(window), //Window object
    scrollTime = 2,
    scrollDistance = 270, //Distance. Use smaller value for shorter scroll and greater value for longer scroll

      evt=window.event || e,//equalize event object
      delta=evt.detail? evt.detail/ 3 : evt.wheelDelta/ 120,//check for detail first so Opera uses that instead of wheelDelta
      scrollTop = el.scrollTop(),
      finalScroll = scrollTop - parseInt((delta * scrollDistance), 10);

      //console.log(finalScroll) 

  var myVar;
   var varCounter = 0;

      /*function myUp() {
            varCounter++;
              console.log($('body').scrollTop() + varCounter);
            TweenLite.to($('body'), 2, {
                  scrollTo: {
                      y:   $('body').scrollTop() + varCounter,
                  },
                   ease: Expo.easeOut
              });
      }

      function myDown() {
            varCounter--;
              console.log($('body').scrollTop() + varCounter);

              TweenLite.to($('body'), 2, {
                  scrollTo: {
                      y:    $('body').scrollTop() + varCounter,
                  },
                  ease: Expo.easeOut
              });
          
      }*/

    TweenMax.to(el, scrollTime, {
                      scrollTo: {
                          y: finalScroll
                      },
                      ease: Expo.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
                      overwrite: 5, 
                      onStart: function(){
                            
                            /*
                            var highestTimeoutId = setInterval(";");
                            for (var i = 0 ; i < highestTimeoutId ; i++) {
                                 clearInterval(i); 
                            }
                              console.log('start');

                              */
                      },

                      onComplete: function(){
                         
                       /*       console.log('complete scroll',$(window).scrollTop());
                              $('body').attr('data-s', $(window).scrollTop())

                        
                        if (delta >= 0 ) {

                                console.log('Scroll up');
                                 var myVar = setInterval(function(){ myDown() }, 600);

                        } else {

                                 console.log('Scroll down');
                                 var myVar = setInterval(function(){ myUp() }, 600);

                        }

                      }
                      */

                    }
            
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

  componentWillMount() {
                var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                console.log('is safari? ' + isSafari)
                    
  }

  render() {
  const slug = this.props.params.slug


	var newProject = [];
	var selectedUser = pjson.find( function(project){
    const getslug = project.slug.toLowerCase().split(' ').join('-');

  	if (slug === getslug) {		
          newProject.push(project);	  
    }
	 });

    const meta = {
      title: 'David Bastian. — ' + newProject[0].slug,
      description:  newProject[0].description,
      //canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'design,art direction,creative,product design,interaction design,interfaces design,chile,web,frontend,backend,reactjs,angularjs.'
        }
      }
    };


    return (


      <div className="slide-inner container" key="inner">
      <DocumentMeta {...meta} />
        
        <div className="description">

          <div className="descriptionInner">
                <h2 key={'h2'} dangerouslySetInnerHTML={{__html: newProject[0].title}} /> 

                <div className="credits">
                    <p  key={'p'} dangerouslySetInnerHTML={{__html: newProject[0].description}} /> 
                      <ul>
                            { newProject[0].agency &&
                               <li>Agency: {newProject[0].agency}</li>
                            }
                            { newProject[0].year &&
                               <li>Year: {newProject[0].year}</li>
                            }
                            { newProject[0].link &&
                               <li><a target="_blank" href={newProject[0].link}><span className="see">Take a Look</span><span className="plane"></span></a></li>
                            }
                      </ul>
                </div>
 
           </div>       
        
        </div> 

        <div className="media-container"> 

                    {     
                              newProject[0].media.map(function(a, i) {

                                 var links = a.links.map(function(l, i) {

                                    var type = a.type;

                                    if( type === 'video') {
                                          var media = <Video key={i} video={l.src} type={a.type} />

                                    } else if (type === 'image'){
                                          var media = <Image  key={i}  image={l.src} type={a.type} />

                                    }

                                    return (                           
                                     <div  key={i}>                          
                                        {media} 
                                    </div>
                                    )
                                });


                                return (
                                      <div className="media" key={i}>
                                        {links}
                                      </div>
                                  )
                                  
                              })
                    } 
        </div>
        
 		
      </div>

    )
  }
}
