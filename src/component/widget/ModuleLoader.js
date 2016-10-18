import SingleIndicate from './SingleIndicate'
import MaterialTable from '../Control/MaterialTable'
import MaterialSelect from '../Control/MaterialSelect'
import MaterialText from '../Control/MaterialText'
import EchartWidget from './EchartWidget'
import EchartWidgetNormal from './EchartWidgetNormal'

const modules = {
  SingleIndicate,
  MaterialTable,
  MaterialSelect,
  MaterialText,
  EchartWidget,
  EchartWidgetNormal

  
};


module.exports = function(name) {
  return modules[name];
}


