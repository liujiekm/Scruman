import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';



import App from '../common/App'


import Home from '../routes/Home/components/Home'
import Config from '../routes/Config/components/Config'



// var App =require('../common/App')
// var Home =require('../routes/Home')
// var Config =require('../routes/Config')





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
  <Router history={history}>
    <Route path="/" component={App} >
        <Route path="Home"   component={Home}/>
        <Route path="Config" component={Config}/>
    </Route>
    
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;