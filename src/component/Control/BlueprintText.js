import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlueprintText extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            value:'',
            placeholder:this.props.placeholder,
            style:{}

        }

        this.handleChange=this.handleChange.bind(this);
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

    handleChange(e)
    {
        this.props.handleChange(e.target.value);
        this.setState({value:e.target.value});
    }
    render(){
        return(

            <input style={this.state.style} className="pt-input" type="text" placeholder={this.state.placeholder} dir="auto"  value={this.state.value} onChange={this.handleChange}/>

        );
    }

}

BlueprintText.propTypes={


}

export default BlueprintText;