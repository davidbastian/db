import React from 'react'
import ReactDom from 'react-dom'  

import './projects.scss'
import gsap from 'gsap'  
import scrolltoplugin from '../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'


import zepto from 'npm-zepto'

import imagesLoaded from 'imagesLoaded'

import p from 'json!./projects.json'
const pjson = p.projects





class Video extends React.Component {

componentDidMount() {
     var node = ReactDom.findDOMNode(this.refs.video);
    // console.log(node);

    /*setTimeout(function(){
                  node.currentTime = 2
     },500)

    setTimeout(function(){
                        node.play();
    },1000)*/

     
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

        $('video').each(function(){
                var video =  $(this)[0];

                      function checkLoad() {
                          if (video.readyState === 4) {
                              console.log('video is done')

                             setTimeout(function(){
                                video.play();
                              },500)

                          } else {
                              setTimeout(checkLoad, 100);
                          }
                      }
                      checkLoad();
        });



        /* imgLoad.on( 'progress', function( instance, image ) {
          var result = image.isLoaded ? 'loaded' : 'broken';
          console.log( 'image is ' + result + ' for ' + image.img.src );
        });*/

         /* var countB = 1,
          imaSize = $('.media-container').find('img').size();

          imagesLoaded('.media-container').always(function (instance) {
              // console.log('all images loaded');

          }).done(function (instance) {
              //console.log('done');

          }).fail(function () {
              //console.log('fail');

          }).progress(function (instance, image) {
              var result = image.isLoaded ? 'loaded' : 'broken';
              
              console.log('width:' +  (((countB = countB + 1) * 100) / imaSize) + '%');
          });*/

          /*window.addEventListener('load', function() {

              var video =  document.getElementsByTagName('video')[0];

              function checkLoad() {
                  if (video.readyState === 4) {
                      console.log('video is done')

                     setTimeout(function(){
                        video.play();
                      },500)

                  } else {
                      setTimeout(checkLoad, 100);
                  }
              }

              checkLoad()

          }, false);*/

          var imgLoad =  imagesLoaded('.media-container');

          imgLoad.on( 'done', function( instance ) {
           console.log('DONE  - all images have been successfully loaded');
          });

          imgLoad.on( 'progress', function( instance, image ) {
            var result = image.isLoaded ? 'loaded' : 'broken';
            console.log( 'image is ' + result + ' for ' + image.img.src );
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
    
   /* var varCounter = 0;

    var varName = function(){
              varCounter++;
             
              console.log(varCounter)
    };*/

   var myVar;
   var varCounter = 0;

      function myUp() {
            varCounter++;
              /* your code goes here */
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
              /* your code goes here */
              console.log($('body').scrollTop() + varCounter);

              TweenLite.to($('body'), 2, {
                  scrollTo: {
                      y:    $('body').scrollTop() + varCounter,
                  },
                  ease: Expo.easeOut
              });
          //  console.log()
      }


      function myStopFunction() {
          clearInterval(myVar);
      }

    TweenMax.to(el, scrollTime, {
                      scrollTo: {
                          y: finalScroll
                      },
                      ease: Expo.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
                      overwrite: 5, 
                      onStart: function(){

                            var highestTimeoutId = setInterval(";");
                            for (var i = 0 ; i < highestTimeoutId ; i++) {
                                 clearInterval(i); 
                            }
                              console.log('start');
                      },

                      onComplete: function(){
                         
                              console.log('complete scroll',$(window).scrollTop());
                              $('body').attr('data-s', $(window).scrollTop())

                        
                        if (delta >= 0 ) {

                                console.log('Scroll up');
                                 var myVar = setInterval(function(){ myDown() }, 600);

                        } else {

                                 console.log('Scroll down');
                                 var myVar = setInterval(function(){ myUp() }, 600);

                        }

                      }

                      /*    var lastScrollTop = 0;
                        var st = $(window).scrollTop();

                               if (st > lastScrollTop){
                                   console.log('down')
                               } else {
                                  console.log('up')
                               }
                               lastScrollTop = st;
                        
                        

                      }*/
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

                //load scrollFunction
                    
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

    return (


      <div className="slide-inner container">
        
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
