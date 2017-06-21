/*
    widget 自定义配置 配置页面
*/



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash'
import uuid from 'uuid'
import ModuleLoader from '../component/widget/ModuleLoader'






class ControlConfigDialog extends Component {

    constructor(props)
    {
        super(props)
        this.state={
          currentProps:{}
        }
    }

  componentWillReceiveProps(nextProps)
  {
    // this.state={
    //       currentProps:nextProps.widgetProps.props
    // }

  }

  handleClose()
  {

    this.props.handleOptionSave(this.props.controlConfig.layoutId,this.state.currentProps,false);
  }
  handleOptionSave() //配置项目修改完成提交
  {
    this.props.handleOptionSave(this.props.controlConfig.layoutId,this.state.currentProps,true);
  }

  produceComponent(widgetProp) //widgetProp 被_.forIn处理成key value的结构对象
  {
    widgetProp.handleTextChange=this.handleTextChange.bind(this);
    return React.createElement(ModuleLoader('MaterialText'),{key:uuid.v1(),data:widgetProp});  
  }

  handleTextChange(savedProps)
  {
    //找到currentProps中的对应项目，修改其值并不需要设置setState来刷新整个页面
    this.state.currentProps[savedProps.key]=savedProps.value;
  }
  render() {

    const actions = [
      <FlatButton
        label="取消"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="提交"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleOptionSave.bind(this)}
      />,
    ];

    let elements = [];
    var self = this;
    let {open,controlConfig} = this.props;
    if(controlConfig.createOption!=null)
    {
        let controlOption = controlConfig.createOption.property;
        _.forIn(controlOption,function(value,key){
            elements.push(self.produceComponent({key,value}));
        });
    }
    






    return (
        <Dialog
          title="配置项修改"
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.handleClose.bind(this)}
        >
          {elements}
        </Dialog>
    );
  }
}


ControlConfigDialog.propTypes={
    
    controlConfig:PropTypes.object.isRequired,
    open:PropTypes.bool.isRequired
}



module.exports = ControlConfigDialog;
