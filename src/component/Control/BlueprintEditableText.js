import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { EditableText  } from "@blueprintjs/core";

class BlueprintEditableText extends Component{


    constructor(props)
    {
        super(props);
        this.state={
            value:'',
            style:{}
        }
    }

    componentDidMount()
    {
        //加载者数据源
        //this.props.dataSource();
        //从父组件state加载 已近填好值的value
        if(this.props.value!='')
        {
            this.state.value=this.props.value;
        }
        else{
            this.state.value=this.props.defaultValue();
        }
        this.setState(this.state);

    }
    handleChange(value)
    {
        //this.props.validation(value);
        //this.props.handleTextChange(value);
        this.props.handleChange(value);//动态生成的Function
        this.setState({value:value});
    }

    render()
    {
        return (
            <EditableText style={this.state.style}
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