/*
    提供所有widget的通用功能：编辑，删除
    纯功能性的
 */

import React, { Component, PropTypes } from 'react';

import classNames from 'classnames'

import ClearIcon from 'material-ui/svg-icons/content/clear';


class Widget extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            
        }

    }

    render(){

        let {edit,itemKey,canDelete} = this.props;
        let wgtContainerClass = classNames({
            'wgt-container':'true',
            'edit': edit
            
            });
        return (

            <div className={wgtContainerClass}>
                {canDelete? <div className="widget-edit-menu">
                                <div title="从dashboard删除widget" className="widget-edit-menu-button-container">
                                    <button className="widget-edit-menu-button" title="从dashboard删除widget">
                                        <ClearIcon />
                                    </button>
                                </div>
                            </div>:''}
                
                {this.props.children}
            </div>

        )
    }



}


Widget.propTypes={
    edit:PropTypes.bool.isRequired,
    
    canDelete:PropTypes.bool.isRequired


}

module.exports = Widget;