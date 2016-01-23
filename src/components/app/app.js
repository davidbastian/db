import './app.scss'
import React from 'react'
import ReactDom from 'react-dom'  
import Header from '../header/header.js'
import Sidebar from '../sidebar/sidebar.js'
import Footer from '../footer/footer.js'

import zepto from 'npm-zepto'
import gsap from 'gsap'




import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//import RouteTransition from './RouteTransition.js'


require('../transitions.scss')

export default class App extends React.Component {

  constructor(props) {
    super(props);
   
  }
 
  render() {

   var name = this.props.params.name;
   const { pathname } = this.props.location

     /*console.log(name)*/
    
    return (
      <div className="main-wrap">
      		 <Header />
           <Sidebar />               
           <div id="site">                                             

                <ReactCSSTransitionGroup component="div" transitionName="example" transitionAppear={true} transitionAppearTimeout={1000}  transitionEnterTimeout={1000} transitionLeaveTimeout={1000} >
                  {React.cloneElement(this.props.children || <div />, { key: pathname })}
                </ReactCSSTransitionGroup>

          </div>
            <Footer />
      </div>    

    );
  }
}
