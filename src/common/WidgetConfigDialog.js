/*
    widget 自定义配置 配置页面
*/



import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class WidgetConfigDialog extends Component {

    constructor(props)
    {
        super(props)

    }






  render() {


    let {open,handleClose} = this.props;
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
        onTouchTap={handleClose}
      />,
    ];

    return (

        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>

    );
  }
}


WidgetConfigDialog.propTypes={
    handleClose:PropTypes.func.isRequired,
    
    open:PropTypes.bool.isRequired
}



module.exports = WidgetConfigDialog;
