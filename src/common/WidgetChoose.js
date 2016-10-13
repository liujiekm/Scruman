/*
    选择需要加入dashboard中组件的选择组件
*/


import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import uuid from 'uuid'
import WidgetChooseItem from './WidgetChooseItem'

class WidgetChoose extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            addBtnDisabled:true,
            chosedWidgetItemId:''
        }

    }


    handleItemClick(itemId) //widget项目选择事件
    {
        this.setState({addBtnDisabled:false,chosedWidgetItemId:itemId});
    }


    componentWillMount()
    {

    }


    handleChoose()
    {
        this.props.handleChoose(this.state.chosedWidgetItemId);
    }
    createWidgetItems(widgetItems) //创建widget list组件
    {
        let widgets = [];
        let self = this;
        _.each(widgetItems,function(item){
            widgets.push(<WidgetChooseItem  key={uuid.v1()}
                                            itemId={item.id}
                                            imgUrl={item.imgUrl}
                                            widgetName={item.widgetName}
                                            widgetDesc={item.widgetDesc}
                                            handleItemClick={self.handleItemClick.bind(self)}
                                            widgetCreateObj={
                                                item.widgetCreateObj
                                                } />);
        });
        return widgets;
    }


    render(){

        let widgets = this.createWidgetItems(this.props.widgetItems);
        return (
                <nav id="blade-menu" style={{"display":this.props.show?"block":"none","transition":"right 500ms ease-out 0s", "right": "0px"}}>
                    <div className="config-margin bowtie-blade bowtie" style={{"display": "block"}}>
                        <div tabIndex="0" className="blade-menu-blade blade-level-1" style={{"width": "435px", "display": "block"}}>
                            <h3 className="ui-dialog-title">添加 Widget</h3>
                            <div className="main-blade-container catalog-container" id="catalog-widgets-container">
                                <div>
                                    <div>
                                        <span className="inline-error-configuration">
                                            <span className="bowtie-icon bowtie-status-error"></span>
                                            <span></span>
                                        </span>
                                    </div>
                                    <div className="icon-input-container right widget-searchterm-container bowtie-icon bowtie-search">
                                        <input className="widget-searchterm-input input-icon-right" type="text" maxLength="60" placeholder="搜索 widgets" />
                                    </div>
                                    <div className="status-indicator center" style={{"display": "none"}}>
                                        <div className="status">
                                            <table><tbody><tr><td><span className="icon big-status-progress"></span><span id="indicator_message">Loading...</span></td></tr></tbody></table>
                                        </div>
                                    </div>
                                    <div className="widget-list-noresults" style={{"display": "none"}}>No results found</div>

                                    <div className="widget-list-container">

                                        {widgets}
                                                
                                    </div>

                                </div>
                            </div>
                            <div className="bowtie blade-configuration-buttons">
                                <nav>
                                    <button ref='chooseBtn' type="button" data-action="save" className="btn-cta" disabled={this.state.addBtnDisabled}  onClick={this.handleChoose.bind(this)}>Add</button>
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
    handleChooseClose:PropTypes.func.isRequired,
    widgetItems:PropTypes.array.isRequired

    
}


module.exports = WidgetChoose;