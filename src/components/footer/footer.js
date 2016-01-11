import React from 'react'
import './footer.scss'


import { Router, Route, Link } from 'react-router'
import { IndexRoute } from 'react-router'
import { createHistory, useBasename } from 'history'



export default class footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (


        	<footer> 

                    <div className="container">
                            <p>© 2016 David Bastian. Chilean Designer & Web Developer. </p>
                           
                    </div>	

                        
        			
        	</footer>


        )
    }
}
