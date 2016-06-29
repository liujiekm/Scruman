// scruman.cn网站入口文件

import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';

import Routes from './src/routes/index'


ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));