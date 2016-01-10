import React from 'react'
import './projects.scss'

import p from 'json!./projects.json'
const pjson = p.projects



class Video extends React.Component {
  render(){
     return (
          <video autoplay="autoplay" loop="true">
            <source src={this.props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      )  
  }
}

class Image extends React.Component {
  render(){
     return (
          <img src={this.props.image} alt={this.props.type} />   
      )  
  }
}



export default class projects extends React.Component {

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
                              newProject[0].media.map(
                                  a =>  
                                      <div className="media">
                                        <img  key={a.img} src={a.img} alt={a.img}/> 
                                      </div>
                                  
                              )
                    } 
        </div>
        
 		
      </div>

    )
  }
}
