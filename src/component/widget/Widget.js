/*
    提供所有widget的通用功能：编辑，删除
    纯功能性的
 */

import React, { Component, PropTypes } from 'react';

import classNames from 'classnames'

class Widget extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            
        }

    }

    render(){

        let {edit,itemKey} = this.props
        let wgtContainerClass = classNames({
            'wgt-container':'true',
            'edit': edit
            });
        return (

            <div key={itemKey} className={wgtContainerClass}>

                {this.props.children}
            </div>

        )
    }



}


Widget.propTypes={
    edit:PropTypes.bool.isRequired,
    itemKey:PropTypes.string.isRequired

}

module.exports = Widget;