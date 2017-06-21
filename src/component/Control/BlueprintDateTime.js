import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover  } from "@blueprintjs/core";
import { DateInput,TimePickerPrecision  } from "@blueprintjs/datetime";
import '@blueprintjs/datetime/dist/blueprint-datetime.css'

class BlueprintDateTime extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            value:new Date(),
            closeOnSelection: true,
            disabled: false,
            format: 'YYYY-MM-DD',
            openOnFocus: true,
            timePrecision: TimePickerPrecision,
            style:{}
        }
    }


    handleChange(selectedDate)
    {
        this.props.handleChange(selectedDate);
        this.setState({value:selectedDate});
    }
    render(){

        return(
            <DateInput style={this.state.style} {...this.state} value={this.state.value} onChange={this.handleChange.bind(this)} />

        );
    }

}


export default BlueprintDateTime;