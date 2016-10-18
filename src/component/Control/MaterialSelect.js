import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
};

/**
 * `SelectField` is implemented as a controlled component, with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class MaterialSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange(event, index, value){this.setState({value})}

  render() {
    return (
      <div>
        <SelectField value={this.state.value} onChange={this.handleChange.bind(this)}>
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
       
      </div>
    );
  }
}