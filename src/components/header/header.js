import React from 'react'


import { Router, Route, Link } from 'react-router'
import { IndexRoute } from 'react-router'
import { createHistory, useBasename } from 'history'


import Navbar from './navbar/navbar.js'
import './header.scss'


export default class header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (


        	<header> 

                    <div className="container">
                            <Navbar />
                    </div>		
        			
        	</header>


        )
    }
}
