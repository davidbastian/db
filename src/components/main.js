/*react*/
import React from 'react';
import ReactDom from 'react-dom'

/*router*/
import { Router, Route, Link } from 'react-router'
import { IndexRoute } from 'react-router'
import { createHistory, useBasename } from 'history'


import Introduction from './introduction/introduction'
import Projects from './projects/projects.js'


import p from 'json!./projects/projects.json' 
const pjson = p.projects

/*console.log(pjson);*/


import App from './app/app'


// Opt-out of persistent state, not recommended.
/*var history = createHistory({
  queryKey: ''
});*/

const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: {

            component: Introduction
    },

    childRoutes: [
      { path: '/:slug', component: Projects },
    ]
  }
]


ReactDom.render( <Router routes={routeConfig} /> , document.getElementById('main'));

