import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import _ from 'lodash';

class BlueprintSelect extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            value:'',
            dataSource:props.dataSource(),
            style:{}
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event)
    {
        this.props.handleChange(event.target.value);
        this.setState({value:event.target.value});
    }

    componentDidMount()
    {
        if(this.props.value!='')
        {
            this.state.value=this.props.value;
        }
        else{
            this.state.value=this.props.defaultValue();
        }
        this.setState(this.state);
        
    }


    render(){

        let options=[];
        _.forEach(this.state.dataSource,function(item){
            options.push(<option key={uuid.v1()} value={item.value}>{item.name}</option>);
        })

        return(
            <div className="pt-select">
                <select style={this.state.style} key={this.props.controlKey} value={this.state.value} onChange={this.handleChange}>
                    {options}
                </select>
            </div>
        );


    }

}

BlueprintSelect.propTypes={

}


export default BlueprintSelect;