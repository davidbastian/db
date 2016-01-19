import './app.scss'
import React from 'react'

import Header from '../header/header.js'
import Sidebar from '../sidebar/sidebar.js'
import Footer from '../footer/footer.js'

import zepto from 'npm-zepto'
import gsap from 'gsap'


require('../app.css')

export default class App extends React.Component {


  constructor(props) {
    super(props);
   
  }
 
  render() {

   var name = this.props.params.name;

     /*console.log(name)*/
    
    return (
      <div className="main-wrap">
      		 <Header />
           <Sidebar />               
           <div id="site">                                             
               {this.props.children}
          </div>
            <Footer />
      </div>    

    );
  }
}
