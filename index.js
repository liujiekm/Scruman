// scruman.cn网站入口文件

import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './src/routes/index'
import './src/content/css/main.css'

injectTapEventPlugin();
ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));