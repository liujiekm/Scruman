// scruman.cn网站入口文件
import React, { PropTypes } from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './src/route/index'
import './src/content/css/main.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

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