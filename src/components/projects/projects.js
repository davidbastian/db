import React from 'react'

import './projects.scss'

import p from 'json!./projects.json'
const pjson = p.projects



export default class projects extends React.Component {

  componentWillMount() {  
   // console.log('hola');
     const slug = this.props.params.slug
      console.log(slug)
  }

  render() {

  const slug = this.props.params.slug

  /*console.log(slug)*/

	var newProject = [];

	var selectedUser = pjson.find( function(project){

      const getslug = project.name.toLowerCase().split(' ').join('-');

      /*console.log(per)*/ 



	  if (slug === getslug) {		
                newProject.push(project);

                


	  }

	});

    var condition  = newProject[0].media !== undefined
   

    return (


      <div className="slide-inner container">
        
        <div className="description">

          <div className="descriptionInner">
               <h2 dangerouslySetInnerHTML={{__html: newProject[0].title}} /> 
               <p>{newProject[0].description}</p>
           </div>       
        
        </div> 
        <div className="images">

                <img src={newProject[0].img} alt={newProject[0].description}/>
                    {
                          
                              newProject[0].media.map(

                            a =>  <img key={a.img} src={a.img} alt={a.img}/>     
                             
                          )
                    } 

        </div>
        
 		
      </div>

    )
  }
}
