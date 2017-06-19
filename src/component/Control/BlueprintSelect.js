import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'

class BlueprintSelect extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            value:props.defaultValue(),
            dataSource:props.dataSource()
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event)
    {
        this.setState({value:event.target.value});
    }

    componentDidMount()
    {

        
    }


    render(){

        let options=[];
        _.forEach(this.state.dataSource,function(item){
            options.push(<option value={item.value}>{item.name}</option>);
        })

        return(
            <div className="pt-select">
                <select key={this.props.controlKey} value={this.state.value} onChange={this.handleChange}>
                    {options}
                </select>
            </div>
        );


    }

}

BlueprintSelect.propTypes={

}


export default BlueprintSelect;