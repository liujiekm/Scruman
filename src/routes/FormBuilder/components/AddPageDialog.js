import React, { Component, PropTypes } from 'react'
import { Button, Classes, Dialog, Tooltip } from "@blueprintjs/core";

class AddPageDialog extends Component{

    constructor(props)
    {
        super(props);

    }

    handleClose(){
        this.props.handleAddDialogClose();
    }

    render(){

        return (
            <Dialog
                    
                    iconName="inbox"
                    onClose={this.handleClose.bind(this)}
                    title="Dialog header"
                    isOpen={this.props.isOpen}
                >
                    <div className={Classes.DIALOG_BODY}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna alqua.
                    </div>
                    <div className={Classes.DIALOG_FOOTER}>
                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                            <Button>Secondary</Button>
                            <Tooltip content="This button is hooked up to close the dialog." inline>
                                <Button className="pt-intent-primary" onClick={this.handleClose.bind(this)}>Primary</Button>
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