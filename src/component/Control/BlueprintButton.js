import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnchorButton, Button, Classes, Intent, Switch } from "@blueprintjs/core";


class BlueprintButton extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            disabled:true,
            text:'',
            active:false,
            intent:Intent.PRIMARY,
            loading:false,
            style:{}

        }
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount()
    {
        this.state.text = this.props.text;
        this.setState(this.state);
    }

    handleClick(event)
    {
        console.log(event)
    }

    render(){
        return (
            <Button style={this.state.style}
                    className='pt-button'
                    disabled={this.state.disabled}
                    active={this.state.active}
                    iconName="refresh"
                    intent={this.state.intent}
                    loading={this.state.loading}
                    onClick={this.handleClick}
                    text={this.state.text}
                />
        );
    }


}
BlueprintButton.propTypes={

}


export default BlueprintButton;