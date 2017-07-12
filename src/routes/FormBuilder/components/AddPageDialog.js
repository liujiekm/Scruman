import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Classes, Dialog, Tooltip,EditableText  } from "@blueprintjs/core";

class AddPageDialog extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            pageName:'',
            pageUrl:''
        }


    }

    handleClose(){
        
        this.props.handleAddDialogClose({name:this.state.pageName,url:this.state.pageUrl});
    }

    handlePageNameChange(e)
    {
        
        //this.props.handlePageNameChange(e.target.value);
        this.setState({pageName:e.target.value});
    }
    handlePageUrlChange(e)
    {
        //this.props.handlePageUrlChange(e.target.valuee);
        this.setState({pageUrl:e.target.value});
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
                        
                        <label className="pt-label">
                            Page Name
                                <input className="pt-input pt-fill" type="text" value={this.state.pageName} onChange={this.handlePageNameChange.bind(this)}  />
                        </label>
                        <label className="pt-label">
                            Page Url
                                <input className="pt-input pt-fill" type="text" value={this.state.pageUrl} onChange={this.handlePageUrlChange.bind(this)}  />
                        </label>
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