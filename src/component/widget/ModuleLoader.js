import SingleIndicate from './SingleIndicate'
import MaterialTable from '../Control/MaterialTable'
import MaterialSelect from '../Control/MaterialSelect'
import MaterialText from '../Control/MaterialText'
import EchartWidget from './EchartWidget'
import EchartWidgetNormal from './EchartWidgetNormal'

import BlueprintEditableText from '../Control/BlueprintEditableText'
import BlueprintDateTime from '../Control/BlueprintDateTime'
import BlueprintNumericInput from '../Control/BlueprintNumericInput'
import BlueprintSelect from '../Control/BlueprintSelect'

const modules = {
  SingleIndicate,
  MaterialTable,
  MaterialSelect,
  MaterialText,
  EchartWidget,
  EchartWidgetNormal,
  BlueprintEditableText,
  BlueprintDateTime,
  BlueprintNumericInput,
  BlueprintSelect

  
};


module.exports = function(name) {
  return modules[name];
}


