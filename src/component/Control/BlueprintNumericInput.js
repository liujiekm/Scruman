import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NumericInput  } from "@blueprintjs/core";


class BlueprintNumericInput extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            value:0,
            max:100,
            min:-100,
            style:{}

        }

    }

    handleChange(num,string)
    {
        this.setState({value:num});
    }
    render(){
        let {value,max,min} = this.state;
        return (
            <NumericInput style={this.state.style}  value={value} max={max} min={min} onValueChange={this.handleChange.bind(this)} placeholder="输入数字"/>


        );
    }
}

export default BlueprintNumericInput;