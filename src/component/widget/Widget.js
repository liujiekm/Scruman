/*
    提供所有widget的通用功能：编辑，删除
    纯功能性的
 */

import React, { Component, PropTypes } from 'react';

import classNames from 'classnames'

import ClearIcon from 'material-ui/svg-icons/content/clear';


import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import SettingIcon from 'material-ui/svg-icons/action/settings';
import ConfigIcon from 'material-ui/svg-icons/action/build'
import HelpIcon from 'material-ui/svg-icons/notification/priority-high'


class Widget extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            edit:false
        }
    }

    handleConfigClick()//打开widget config配置页面
    {
        this.props.handleDialogOpen();
    }



    render(){

        let {edit,itemKey,canDelete,layoutId} = this.props;
        let wgtContainerClass = classNames({
            'wgt-container':'true',
            'edit': edit
            
            });
        let wgtDeleteMenuClass=classNames({
            'widget-edit-menu':'true',
            'hide':!canDelete
            
            });


                let wgtConfigMenuClass=classNames({
            'widget-config-menu':'true',
            'hide':!canDelete
            
            });


        
        return (

            <div className={wgtContainerClass} 
                                               
            >
                <div className={wgtDeleteMenuClass} onClick={this.props.handleDelete.bind(this,layoutId)}>
                    <div title="从dashboard删除widget" className="widget-edit-menu-button-container">
                        <button className="widget-edit-menu-button" title="从dashboard删除widget"  >
                            <ClearIcon />
                        </button>
                    </div>
                </div>
                
                {this.props.children}

                <div className={wgtConfigMenuClass} >
                    <IconMenu  style={{width:'26px',height:'26px',top:'-10px'}}
                    iconButtonElement={<IconButton><SettingIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    >
                        <MenuItem primaryText="设置" leftIcon={<ConfigIcon />} onClick={this.handleConfigClick.bind(this)}/>
                        <MenuItem primaryText="帮助" leftIcon={<HelpIcon />}/>
                    </IconMenu>
                </div>
                
            </div>

        )
    }



}


Widget.propTypes={
    edit:PropTypes.bool.isRequired,
    
    canDelete:PropTypes.bool.isRequired


}

module.exports = Widget;