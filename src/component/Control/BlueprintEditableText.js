import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { EditableText  } from "@blueprintjs/core";

class BlueprintEditableText extends Component{


    constructor(props)
    {
        super(props);
        this.state={
            value:props.value
        }
    }

    handleChange(value)
    {
        //this.props.handleTextChange(value);
        this.setState({value:value});
    }

    render()
    {
        return (
            <EditableText
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                placeholder="Edit ..."
            />
        );
    }


}

BlueprintEditableText.propTypes={



}

module.exports= BlueprintEditableText;