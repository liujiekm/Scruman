import React, { Component, PropTypes } from 'react'
import { Button, Classes, Dialog, Tooltip,EditableText  } from "@blueprintjs/core";

class AddFieldDialog extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            name:''
        }

    }

    handleClose(){
        this.props.fieldDialogClose();
    }

    handleChange(e)
    {
        this.props.fieldNameChange(e);
        this.setState({pageName:e});
    }
    componentDidMount()
    {
        //加载初始化，或者编辑的数据

    }
    render(){

        return (
            <Dialog
                    
                    iconName="inbox"
                    onClose={this.handleClose.bind(this)}
                    title="Field"
                    isOpen={this.props.isOpen}
                >
                    <div className={Classes.DIALOG_BODY}>
                        <EditableText  value={this.state.fieldName} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className={Classes.DIALOG_FOOTER}>
                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                            <Button>取消</Button>
                            <Tooltip content="This button is hooked up to close the dialog." inline>
                                <Button className="pt-intent-primary" onClick={this.handleClose.bind(this)}>确定</Button>
                            </Tooltip>
                        </div>
                    </div>
                </Dialog>
        )
    }
}

AddFieldDialog.propTypes={
    fieldDialogClose:PropTypes.func.isRequired,
    isOpen:PropTypes.bool.isRequired
    
}

export default AddFieldDialog;