import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';



import App from '../common/App'


import Home from '../routes/Home/components/Home'
import Config from '../routes/Config/components/Config'







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

const isReactComponent = (obj) => Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));

const component = (component) => {
  return isReactComponent(component)
    ? {component}
    : {getComponent: (loc, cb)=> component(
         comp=> cb(null, comp.default || comp))}
};



const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} >
        <IndexRoute {...component(Home)}/>
        <Route path="Home"    {...component(Home)} />
        <Route path="Config"  {...component(Config)}/>
    </Route>
    
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;