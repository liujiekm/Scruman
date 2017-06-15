import React, { Component, PropTypes } from 'react'
import { Button, Classes, Dialog, Tooltip,EditableText  } from "@blueprintjs/core";
import {
    
    InputGroup,
    Intent,
    Menu,
    MenuItem,
    Popover,
    Position,
    Spinner,
    Switch,
    Tag
    
} from "@blueprintjs/core";

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

    fieldNameChange(e)
    {
        this.props.fieldNameChange(e);
        this.setState({pageName:e});
    }
    defaultValueChange(e)
    {
        
    }
    componentDidMount()
    {
        //加载初始化，或者编辑的数据

    }
    render(){

        return (
            <Dialog
                    
                    iconName="full-stacked-chart"
                    onClose={this.handleClose.bind(this)}
                    title="Field"
                    isOpen={this.props.fieldDialogOpen}
                >
                    <div className={Classes.DIALOG_BODY}>
                        <div className="pt-form-group">
                            <label className="pt-label">
                                Field Name
                            </label>
                            <div className="pt-form-content">
                                <input className="pt-input"   type="text" dir="auto" value={this.state.fieldName} onChange={this.fieldNameChange.bind(this)} />
                            </div>
                        </div>

                        <div className="pt-form-group">
                            <label className="pt-label">
                                Default Value
                            </label>
                            <div className="pt-form-content">
                                <input className="pt-input"   type="text" dir="auto" value={this.state.defaultValue} onChange={this.defaultValueChange.bind(this)} />
                            </div>
                        </div>

                        <div className="pt-form-group">
                            <label className="pt-label">
                                Type
                            </label>
                            <div className="pt-form-content">
                                <div className="pt-select">
                                    <select>
                                        <option selected value='string'>文本(string)</option>
                                        <option value="integer">整数(integer)</option>
                                        <option value="double">小数(double)</option>
                                        <option value="boolean">True/False (boolean)</option>
                                        <option value="date">日期(date)</option>
                                        <option value="time">时间(time)</option>
                                        <option value="base64">图片或文件附件(base64)</option>
                                        <option value="XHTML">格式文本(XHTML)</option>
                                        <option value="anyURI">超链接(anyURI)</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={Classes.DIALOG_FOOTER}>
                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                            <Button>取消</Button>
                            
                            <Button className="pt-intent-primary" onClick={this.handleClose.bind(this)}>确定</Button>

                        </div>
                    </div>
                </Dialog>
        )
    }
}

AddFieldDialog.propTypes={
    fieldDialogClose:PropTypes.func.isRequired,
    fieldDialogOpen:PropTypes.bool.isRequired,
    fieldNameChange:PropTypes.bool.isRequired
    
}

export default AddFieldDialog;