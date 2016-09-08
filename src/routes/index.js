import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';


import App from '../common/App'


import  Second from '../component/Second'

import Default from '../component/default/Default'




const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} >
        <Route path="Default" component={Default} />
        <Route path="Second" component={Second} />
    </Route>
    
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;