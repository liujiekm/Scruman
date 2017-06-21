/*
    根据传入了controls 渲染界面

 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom'
import _ from 'lodash'
import Immutable from 'immutable'
import uuid from 'uuid'
import ModuleLoader from '../../../component/widget/ModuleLoader'
import ReactGridLayout from 'react-grid-layout'
import { Classes, ITreeNode, Tooltip, Tree } from "@blueprintjs/core"

import Widget from '../../../component/widget/Widget'
class FormContainer extends Component{
    constructor(props)
    {
        super(props)
        //从存储中加载当前state
        var currentState = localStorage.getItem('context');
        if(currentState)
        {
            this.state=JSON.parse(currentState); //实际页面肯定需要从存储中获取state
        }
        else
        {
            this.state={}
        }
    }


    handleNodeCollapse(nodeData)
    {
        nodeData.isExpanded = false;
        nodeData.iconName='folder-close'
        this.setState(this.state);
    }

    handleNodeExpand (nodeData)
    {
        nodeData.isExpanded = true;
        nodeData.iconName='folder-open'
        this.setState(this.state);
    }
    //Page Tree 节点选中事件：
    //加载pageLayout 中对于的Layout到当前Grid-Layout中
    handlePageNodeClick(nodeData, _nodePath, e)
    {
        const originallySelected = nodeData.isSelected;
        this.forEachNode(this.state.pages, (n) => n.isSelected = false);
        // if (!e.shiftKey) {
            
        // }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        let pageId = nodeData.id;
        //设置当前页面的Layout
        let layout = _.result(_.find(this.state.pageLayout,{pageId:pageId}),'layout');
        this.state.layouts=layout;
        //加载当前页面的控件集合
        //let controls = _.result(_.find(this.state.pageLayout,{pageId:pageId}),'controls');
        //this.state.controls=controls;    
        this.state.currentPage= pageId;
        this.setState(this.state);
    }
    forEachNode(nodes, callback) {
        if (nodes == null) {
            return;
        }
        for (const node of nodes) {
            callback(node);
            this.forEachNode(node.childNodes, callback);
        }
    }

    generateDOM(control) {

        let controlProperty = _.cloneDeep(control.createOption.property);
        controlProperty.defaultValue=new Function("var context = this.state;  return " +controlProperty.defaultValue +";").bind(this);
        controlProperty.validation=new Function("var context = this.state; return " +controlProperty.validation +";").bind(this);
        controlProperty.dataSource=new Function("var context = this.state; return " +controlProperty.dataSource +";").bind(this);
        //各控件传出value到state
        let handleChangeFunctionBody = "control.createOption.property.value=value;this.setState(this.state);"
        controlProperty.handleChange=new Function("control","value",handleChangeFunctionBody).bind(this,control);

        //针对EditableText 控件 在实际页面上需要disable
        if(control.createOption.type=='BlueprintEditableText')
        {
            controlProperty.disabled=true;
        }

        let element = React.createElement(ModuleLoader(control.createOption.type),controlProperty);
        
        return (
            <div key={control.layoutId}>
                <Widget  edit={this.state.edit} canDelete={this.state.canDelete} layoutId={control.layoutId}>
                {element}
                </Widget>
            </div>
        );
    }

    render(){
        
        let currentLayout = _.result(_.find(this.state.pageLayout,{pageId:this.state.currentPage}),'layout');
        let currentControls = _.result(_.find(this.state.pageLayout,{pageId:this.state.currentPage}),'controls');
        return(

            <div style={{'width':'100%','height':'100%'}}> 
                <div className='pages-zone'>
                        <Tree
                            contents={this.state.pages}
                            onNodeClick={this.handlePageNodeClick.bind(this)}
                            onNodeCollapse={this.handleNodeCollapse.bind(this)}
                            onNodeExpand={this.handleNodeExpand.bind(this)}
                            className={Classes.ELEVATION_0}
                            
                        />
                    
                </div>
                <form className='form-designer'>
                    <ReactGridLayout {...this.props} layout={currentLayout} >
                        {_.map(currentControls, this.generateDOM.bind(this))}
                    </ReactGridLayout>
                </form>
            </div>

        );



    }
}

FormContainer.defaultProps = {
    className: "layout",
    rowHeight: 30,
    width:1200,
    cols: 36,
    verticalCompact:false,
    isResizable:false,
    isDraggable:false,
    margin:[5,5]
    
}
FormContainer.propTypes={
    
    cols:PropTypes.number.isRequired,
    rowHeight:PropTypes.number.isRequired,
    width:PropTypes.number.isRequired,
    margin:PropTypes.array.isRequired


}


export default FormContainer;