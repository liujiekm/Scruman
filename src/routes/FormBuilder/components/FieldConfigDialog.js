import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class FieldConfigDialog extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            fieldName:'',
            defaultValue:'',
            type:'string',
            control:'BlueprintEditableText',
            dataSource:'',
            validation:''

        }

    }

    handleClose(){
        this.props.fieldDialogClose();
    }

    fieldNameChange(e)
    {
        //this.props.fieldNameChange(e.target.value);
        this.setState({fieldName:e.target.value});
    }
    fieldDefaultValueChange(e)
    {
        //this.props.fieldDefaultValueChange(e.target.value);
        this.setState({defaultValue: e.target.value});
    }


    fieldTypeChange(e)
    {
        //this.props.fieldTypeChange(e.target.value);
        this.setState({type: e.target.value});
    }
    fieldControlChange(e)
    {
        this.setState({control: e.target.value});
    }

    fieldValidationChange(e)
    {
        this.setState({validation: e.target.value});
    }
    fieldDataSourceChange(e)
    {
        this.setState({dataSource: e.target.value});
    }
    //field 配置提交保存
    fieldConfigSubmit()
    {
        //进行表单验证


        this.props.fieldConfigSubmit(this.state);
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
                                Type
                            </label>
                            <div className="pt-form-content">
                                <div className="pt-select">
                                    <select value={this.state.type} onChange={this.fieldTypeChange.bind(this)}>
                                        <option value='string'>文本(string)</option>
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


                        <div className="pt-form-group">
                            <label className="pt-label">
                                Control
                            </label>
                            <div className="pt-form-content">
                                <div className="pt-select">
                                    <select value={this.state.control} onChange={this.fieldControlChange.bind(this)}>
                                        <option value='BlueprintEditableText'>文本框(Lable)</option>
                                        <option value='BlueprintText'>文本框</option>
                                        <option value="BlueprintDateTime">日期选择</option>
                                        <option value="BlueprintNumericInput">数字框</option>
                                        <option value="BlueprintSelect">单选框</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="pt-form-group">
                        </div>

                        <div className="pt-form-group">
                            <label className="pt-label">
                                Default Value
                            </label>
                            <div className="pt-form-content">
                                <input className="pt-input"   type="text" dir="auto" value={this.state.defaultValue} onChange={this.fieldDefaultValueChange.bind(this)} />
                            </div>
                        </div>


                        <div className="pt-form-group">
                            <label className="pt-label">
                                Validate
                            </label>
                            <div className="pt-form-content">
                                <input className="pt-input"   type="text" dir="auto"  value={this.state.validation} onChange={this.fieldValidationChange.bind(this)} />
                            </div>
                        </div>


                        <div className="pt-form-group">
                            <label className="pt-label">
                                Data Source
                            </label>
                            <div className="pt-form-content">
                                <input className="pt-input"   type="text" dir="auto" value={this.state.dataSource} onChange={this.fieldDataSourceChange.bind(this)} />
                            </div>
                        </div>

                    </div>
                    <div className={Classes.DIALOG_FOOTER}>
                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                            <Button onClick={this.handleClose.bind(this)}>取消</Button>
                            
                            <Button className="pt-intent-primary" onClick={this.fieldConfigSubmit.bind(this)}>确定</Button>

                        </div>
                    </div>
                </Dialog>
        )
    }
}

FieldConfigDialog.propTypes={
    fieldDialogClose:PropTypes.func.isRequired,
    fieldDialogOpen:PropTypes.bool.isRequired,
    // fieldNameChange:PropTypes.bool.isRequired,
    // fieldDefaultValueChange:PropTypes.bool.isRequired,
    // fieldTypeChange:PropTypes.bool.isRequired,
    fieldConfigSubmit:PropTypes.func.isRequired,
    
}

export default FieldConfigDialog;