import SingleIndicate from './SingleIndicate'
import MaterialTable from '../Control/MaterialTable'
import MaterialSelect from '../Control/MaterialSelect'
import MaterialText from '../Control/MaterialText'
import EchartWidget from './EchartWidget'
import EchartWidgetNormal from './EchartWidgetNormal'

import BlueprintEditableText from '../Control/BlueprintEditableText'
import BlueprintDateTime from '../Control/BlueprintDateTime'
import BlueprintNumericInput from '../Control/BlueprintNumericInput'

const modules = {
  SingleIndicate,
  MaterialTable,
  MaterialSelect,
  MaterialText,
  EchartWidget,
  EchartWidgetNormal,
  BlueprintEditableText,
  BlueprintDateTime,
  BlueprintNumericInput

  
};


module.exports = function(name) {
  return modules[name];
}


