import React from 'react'
import './projects.scss'

import p from 'json!./projects.json'
const pjson = p.projects



class Video extends React.Component {

  render() {

        return (
        <video loop="true" and  autoplay="autoplay">
          <source src={this.props.myvideo} type="video/mp4"></source>
        </video>
      )
  }

};

//export default Link

export default class projects extends React.Component {

  render() {

  const slug = this.props.params.slug

  /*console.log(slug)*/

	var newProject = [];
	var selectedUser = pjson.find( function(project){
  const getslug = project.name.toLowerCase().split(' ').join('-');

      /*console.log(per)*/ 

	  if (slug === getslug) {		
                newProject.push(project);

                console.log(newProject[0].media)
	  }

	});

    let condition  = newProject[0].media !== undefined

    const url = 'images/009.mp4'
        /*      if (condition) {
        console.log('')   
      }
      */
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
