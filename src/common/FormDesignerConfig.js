/*
    表单编辑器中的Field选择控件
*/


import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import uuid from 'uuid'


class FormDesignerConfig extends Component{
    constructor(props)
    {
        super(props)


    }

    componentWillMount()
    {

    }


    configAdd()
    {
        this.props.configAdd();
    }



    render(){

        
        return (
                <nav id="blade-menu" style={{"display":this.props.show?"block":"none","transition":"right 500ms ease-out 0s", "right": "0px"}}>
                    <div className="config-margin bowtie-blade bowtie" style={{"display": "block"}}>
                        <div tabIndex="0" className="blade-menu-blade blade-level-1" style={{"width": "435px", "display": "block"}}>
                            <h3 className="ui-dialog-title">添加</h3>
                            <div className="main-blade-container catalog-container" id="catalog-widgets-container">
                                <div>
                                    <div>
                                        <span className="inline-error-configuration">
                                            <span className="bowtie-icon bowtie-status-error"></span>
                                            <span></span>
                                        </span>
                                    </div>


                                    <div className="widget-list-container">

                                        {this.props.children}
                                                
                                    </div>

                                </div>
                            </div>
                            <div className="bowtie blade-configuration-buttons">
                                <nav>
                                    <button ref='chooseBtn' type="button" data-action="save" className="btn-cta" disabled={this.props.configAddButtonDisable}  onClick={this.configAdd.bind(this)}>Add</button>
                                    <button type="button" data-action="cancel" className="btn-default" onClick={this.props.handleChooseClose}>Close</button>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div style={{"display": "none"}}>
                        <div tabIndex="-1" className="blade-menu-blade blade-level-2" style={{"width": "435px", "display": "none"}}>
                            <h3 className="ui-dialog-title">Configuration</h3>
                        </div>
                    </div>
                </nav>


        );
    }
}



FormDesignerConfig.propTypes={
    configAdd:PropTypes.func.isRequired, 
    configAddButtonDisable:PropTypes.bool.isRequired,
    handleChooseClose:PropTypes.func.isRequired


    
}


module.exports = FormDesignerConfig;