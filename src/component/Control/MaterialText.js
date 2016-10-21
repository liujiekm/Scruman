

import React,{Component,PropTypes} from 'react'
import TextField from 'material-ui/TextField';

class MaterialText extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.data.value,
    };
  }

  handleChange(event){
    this.props.data.handleTextChange({key:this.props.data.key,value:event.target.value})
    this.setState({
        value: event.target.value
    });

  };

  componentWillReceiveProps(nextProps)
  {
        this.setState({
          value: nextProps.value
        });
  }
  render() {
    return (

        <TextField
          id={this.props.data.key}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          floatingLabelText={this.props.data.key}
        />

    );
  }
}

MaterialText.propTypes={
  data:PropTypes.object.isRequired
}


module.exports = MaterialText;