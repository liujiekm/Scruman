/*
    widget 自定义配置 配置页面
*/



import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash'
import uuid from 'uuid'
import ModuleLoader from '../component/widget/ModuleLoader'


class WidgetConfigDialog extends Component {

    constructor(props)
    {
        super(props)
        this.state={
          
          
        }

    }



  
  componentWillReceiveProps(nextProps)
  {
    this.state={
          currentProps:nextProps.widgetProps.props
          
    }
  }



  handleOptionSave() //配置项目修改完成提交
  {
    this.props.handleOptionSave(this.props.widgetProps.layoutId,this.state.currentProps);
  }

  produceComponent(widgetProp) //widgetProp 被_.forIn处理成key value的结构对象
  {
    widgetProp.handleTextChange=this.handleTextChange.bind(this);
    return React.createElement(ModuleLoader('MaterialText'),{key:uuid.v1(),data:widgetProp});
    
  }

  handleTextChange(savedProps)
  {
    //找到currentProps中的对应项目，修改其值
    this.state.currentProps[savedProps.key]=savedProps.value;
    this.setState({currentProps:this.state.currentProps});
  }
  render() {


    let {open,handleClose,widgetProps} = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleOptionSave.bind(this)}
      />,
    ];


    let elements = [];
    var self = this;
    _.forIn(this.state.currentProps,function(value,key){
            elements.push(self.produceComponent({key,value}));
    });
    return (

        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={handleClose}
        >
          {elements}
        </Dialog>

    );
  }
}


WidgetConfigDialog.propTypes={
    handleClose:PropTypes.func.isRequired,
    widgetProps:PropTypes.object.isRequired,
    open:PropTypes.bool.isRequired
}



module.exports = WidgetConfigDialog;
