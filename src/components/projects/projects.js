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

    setTimeout(function(){
                  node.currentTime = 2
     },500)

    setTimeout(function(){
                        node.play();
    },1000)

     
}


render(){
     return (
          <video  ref='video' loop="true">
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

          window.addEventListener('load', function() {

              var video =  document.getElementsByTagName('video')[0];
              //var preloader = document.querySelector('.preloader');

              function checkLoad() {
                  if (video.readyState === 4) {
                      //preloader.parentNode.removeChild(preloader);
                      console.log('video is done')

                     setTimeout(function(){
                        video.play();
                      },500)

                  } else {
                      setTimeout(checkLoad, 100);
                  }
              }

              checkLoad();

          }, false);

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


    $('body').on('mousewheel', function (event) {
        this.scrollTop += (event.deltaY);
        event.preventDefault();
    });

  }

  /*scrollFunction() {
              var ele = $('#main'),
                  scrollTime = 1.2,
                  scrollDistance = 170; 

                require('mouse-wheel')(function(dx, dy, noScroll) {

                  var delta = dy / 10,
                      scrollTop = ele.scrollTop(),
                      finalScroll = scrollTop - parseInt((delta * scrollDistance), 10);
                     // console.log(delta, scrollTop,finalScroll);

                      TweenMax.to(ele, scrollTime, {
                          scrollTo: {
                              y: finalScroll
                          },
                          ease: Expo.easeOut,
                          overwrite: 5
                      });
              })

  }*/


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
                <p  key={'p'} dangerouslySetInnerHTML={{__html: newProject[0].description}} /> 
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
