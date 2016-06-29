import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';


import App from '../common/App'

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} >
        
    </Route>
    
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;