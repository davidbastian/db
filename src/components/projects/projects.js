import React from 'react'
import ReactDom from 'react-dom';  
import './projects.scss'

import p from 'json!./projects.json'
const pjson = p.projects



class Video extends React.Component {
  render(){
     return (
          <video loop="true">
            <source src={this.props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      )  
  }
}

class Image extends React.Component {




  render(){
     return (
          <img  src={this.props.image} alt={this.props.type} />   
      )  
  }
}




export default class projects extends React.Component {

  componentDidMount() {
      console.log(ReactDom.findDOMNode(this.refs.one));
  }



  render() {

  const slug = this.props.params.slug

  /*console.log(slug)*/



	var newProject = [];
	var selectedUser = pjson.find( function(project){
  const getslug = project.slug.toLowerCase().split(' ').join('-');

      /*console.log(per)*/ 

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
                                          var media = <Image ref='one' key={i}  image={l.src} type={a.type} />

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
