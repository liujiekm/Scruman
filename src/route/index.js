import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute, Link } from 'react-router';



import App from '../common/App'


import Home from '../routes/Home/components/Home'
import Config from '../routes/Config/components/Config'
import Chase from '../routes/Chase/components/Chase'

import FormBuilder from '../routes/FormBuilder/components/FormBuilder'

import ActualPage from '../routes/ActualPage/components/ActualPage'


const isReactComponent = (obj) => Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));

const component = (component) => {
  return isReactComponent(component)
    ? {component}
    : {getComponent: (loc, cb)=> component(
         comp=> cb(null, comp.default || comp))}
};




const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'Home', component: Home },
    {
      path: 'Config',
      component: Config
    },
    {
      path:'Chase',
      component: Chase
      
    },
    {
      path:'FormBuilder',
      component: FormBuilder
      
    },
    {
      path:'ActualPage',
      component: ActualPage
      
    }
  ]
}




// function lazyLoadComponent(lazyModule) {  
//   return (location, cb) => {
//     lazyModule(module => cb(null, module))
//   }
// }

// function lazyLoadComponents(lazyModules) {  
//   return (location, cb) => {
//     const moduleKeys = Object.keys(lazyModules);
//     const promises = moduleKeys.map(key =>
//       new Promise(resolve => lazyModules[key](resolve))
//     )

//     Promise.all(promises).then(modules => {
//       cb(null, modules.reduce((obj, module, i) => {
//         obj[moduleKeys[i]] = module;
//         return obj;
//       }, {}))
//     })
//   }
// }





const Routes = ({ history }) =>
  <Router history={history} routes={routes}>

    
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;


    // <Route path="/" component={App} >
    //     <IndexRoute {...component(Home)}/>
    //     <Route path="Home"    {...component(Home)} />
    //     <Route path="Config"  {...component(Config)}/>
    //     <Route path="Chase"  {...component(Chase)}/>
    //     <Route path="FormBuilder"  {...component(FormBuilder)}/>
    //     <Route path="ActualPage"  {...component(ActualPage)}/>
    // </Route>