import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { EditableText  } from "@blueprintjs/core";

class BlueprintEditableText extends Component{


    constructor(props)
    {
        super(props);
        this.state={
            value:''
        }
    }

    componentDidMount()
    {
        //加载者数据源
        //this.props.dataSource();


    }
    handleChange(value)
    {
        //this.props.validation(value);
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
    // fieldId:PropTypes.string.isRequired, //关联到FieldDefinition（state）
    // defaultValue:PropTypes.func.isRequired,
    // dataSource:PropTypes.func.isRequired,
    // validation:PropTypes.func.isRequired

}

module.exports= BlueprintEditableText;