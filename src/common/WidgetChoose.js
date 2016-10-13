/*
    选择需要加入dashboard中组件的选择组件
*/


import React, { Component, PropTypes } from 'react'

import WidgetChooseItem from './WidgetChooseItem'

class WidgetChoose extends Component{
    constructor(props)
    {
        super(props)

    }



    render(){


        return (
                <nav id="blade-menu" style={{"display":this.props.show?"block":"none","transition":"right 500ms ease-out 0s", "right": "0px"}}>
                    <div className="config-margin bowtie-blade bowtie" style={{"display": "block"}}>
                        <div tabIndex="0" className="blade-menu-blade blade-level-1" style={{"width": "435px", "display": "block"}}>
                            <h3 className="ui-dialog-title">Add Widget</h3>
                            <div className="main-blade-container catalog-container" id="catalog-widgets-container">
                                <div>
                                    <div>
                                        <span className="inline-error-configuration">
                                            <span className="bowtie-icon bowtie-status-error"></span>
                                            <span></span>
                                        </span>
                                    </div>
                                    <div className="icon-input-container right widget-searchterm-container bowtie-icon bowtie-search">
                                        <input className="widget-searchterm-input input-icon-right" type="text" maxLength="60" placeholder="Search widgets" />
                                    </div>
                                    <div className="status-indicator center" style={{"display": "none"}}>
                                        <div className="status">
                                            <table><tbody><tr><td><span className="icon big-status-progress"></span><span id="indicator_message">Loading...</span></td></tr></tbody></table>
                                        </div>
                                    </div>
                                    <div className="widget-list-noresults" style={{"display": "none"}}>No results found</div>

                                    <div className="widget-list-container">

                                        <WidgetChooseItem imgUrl='./src/content/img/assignedToMe.png' widgetName='焦点数据'  widgetDesc='集中显示用户比较关心的焦点数据，一目了然，明确，明显'/>

                                    </div>

                                </div>
                            </div>
                            <div className="bowtie blade-configuration-buttons">
                                <nav>
                                    <button type="button" data-action="save" className="btn-cta" disabled="disabled" onClick={this.props.handleChoose}>Add</button>
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



WidgetChoose.propTypes={
    handleChoose:PropTypes.func.isRequired, //对外暴露的widget选择组件方法
    show:PropTypes.bool.isRequired,
    handleChooseClose:PropTypes.func.isRequired
}


module.exports = WidgetChoose;