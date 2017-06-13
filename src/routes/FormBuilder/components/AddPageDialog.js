import React, { Component, PropTypes } from 'react'
import { Button, Classes, Dialog, Tooltip,EditableText  } from "@blueprintjs/core";

class AddPageDialog extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            pageName:''
        }

    }

    handleClose(){
        this.props.handleAddDialogClose();
    }

    handleChange(e)
    {
        this.props.handlePageNameChange(e);
        this.setState({pageName:e});
    }
    render(){

        return (
            <Dialog
                    
                    iconName="inbox"
                    onClose={this.handleClose.bind(this)}
                    title="Add Page"
                    isOpen={this.props.isOpen}
                >
                    <div className={Classes.DIALOG_BODY}>
                        <EditableText  value={this.state.pageName} onChange={this.handleChange.bind(this)}/>
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

AddPageDialog.propTypes={
    handleAddDialogClose:PropTypes.func.isRequired,
    isOpen:PropTypes.bool.isRequired
    
}

export default AddPageDialog;