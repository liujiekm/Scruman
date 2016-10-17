import SingleIndicate from './SingleIndicate'


const modules = {
  SingleIndicate
  
};


module.exports = function(name) {
  return modules[name];
}


