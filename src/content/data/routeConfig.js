
import App from '../../common/App'
import Home from '../../routes/Home/components/Home'
import Config from '../../routes/Config/components/Config'
import Chase from '../../routes/Chase/components/Chase'
import FormBuilder from '../../routes/FormBuilder/components/FormBuilder'
const isReactComponent = (obj) => Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));

const component = (component) => {
  return isReactComponent(component)
    ? {component}
    : {getComponent: (loc, cb)=> component(
         comp=> cb(null, comp.default || comp))}
};



var routeConfig={
  path: '/',
  component: App,
  indexRoute: { component: component(Home) },
  childRoutes: [
    
    {
      path: 'Home',
      component: component(Home),
      childRoutes: [{
        
        
      }]
    },
    {
      path: 'Config',
      component: component(Config),
      childRoutes: [{
        
      }]
    }
    ,
    {
      path: 'Chase',
      component: component(Chase),
      childRoutes: [{
        
      }]
    }
    ,
    {
      path: 'FormBuilder',
      component: component(FormBuilder),
      childRoutes: [{
        
      }]
    }
  ]
}

export default routeConfig;