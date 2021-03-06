// scruman.cn网站入口文件
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
 import Routes from './src/route/index'

import routeConfig from './src/content/data/routeConfig'

import './src/content/css/main.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import "@blueprintjs/core/dist/blueprint.css";
injectTapEventPlugin();

// const rootRoute = {
//   component: 'div',
//   childRoutes: [ {
//     path: '/',
//     component: require('./src/common/App'),
//     childRoutes: [
//       require('./src/routes/Home'),
//       require('./src/routes/Config')
   
//     ]
//   } ]
// }


//<Router history={browserHistory} routes={rootRoute} />
render(<Routes history={browserHistory} />,
document.getElementById('root'));

// render(<Router history={browserHistory} routes={routeConfig} />,
// document.getElementById('root'));