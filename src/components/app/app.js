import './app.scss'
import React from 'react'
import ReactDom from 'react-dom'  
import Header from '../header/header.js'
import Sidebar from '../sidebar/sidebar.js'
import Footer from '../footer/footer.js'

import zepto from 'npm-zepto'
import gsap from 'gsap'


import ReactTransitionGroup from 'react-addons-transition-group'

//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//import RouteTransition from './RouteTransition.js'


//require('../transitions.scss')

export default class App extends React.Component {

  constructor(props) {
    super(props);
   
  }

    componentWillAppear(didAppearCallback){
        console.log('MyBox.componentWillAppear');
        //this.show(didAppearCallback);
    }
    componentDidAppear(){
        console.log('MyBox.componentDidAppear');
    }

    componentWillEnter(didEnterCallback){
        console.log('MyBox.componentWillEnter');
        //this.show(didEnterCallback);
    }
    componentDidEnter(){
        console.log('MyBox.componentDidEnter');
    }


    componentWillLeave(didLeaveCallback){
        console.log('MyBox.componentWillLeave');
       // this.hide(didLeaveCallback);
    }
    componentDidLeave(){
        console.log('MyBox.componentDidLeave');
    }

    componentDidMount() {
        console.log('MyBox.componentDidMount');
    }
    componentWillUnmount() {
        console.log('MyBox.componentWillUnmount');
    }


 
  render() {

   const { location } = this.props;

     /*console.log(name)*/
    
    return (
      <div className="main-wrap">
      		 <Header />
           <Sidebar />               
           <div id="site">                                             

                <ReactTransitionGroup component='div' className='transition-wrapper'>
            {React.cloneElement(this.props.children, {
              key: location.pathname,
            })}
          </ReactTransitionGroup>

          </div>
            <Footer />
      </div>    

    );
  }
}
