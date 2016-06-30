import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';


import App from '../common/App'

import  Alternative from '../component/Alternative'
import  Second from '../component/Second'

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} >
        <Route path="Alternative" component={Alternative} />
        <Route path="Second" component={Second} />
    </Route>
    
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;