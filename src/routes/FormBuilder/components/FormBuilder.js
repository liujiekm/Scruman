import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import PureRenderMixin  from 'react/lib/ReactComponentWithPureRenderMixin'
import _ from 'lodash'
import uuid from 'uuid'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Form from "react-jsonschema-form"

import GridEdit from '../../../common/GridEdit'

import FieldChoose from '../../../common/FieldChoose'


import { Classes, ITreeNode, Tooltip, Tree } from "@blueprintjs/core"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'


//Custom Form Designer
class FormBuilder extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            
            editComponentClicked:false,
            showWidgetChoose:false,
            selectControls:[],

            nodes: [
                {
                    hasCaret: true,
                    iconName: "folder-close",
                    label: "Folder 0",
                },
                {
                    iconName: "folder-close",
                    isExpanded: true,
                    label: <Tooltip content="I'm a folder <3">Folder 1</Tooltip>,
                    childNodes: [
                        { iconName: "document", label: "Item 0" },
                        { iconName: "pt-icon-tag", label: "Item 1" },
                        {
                            hasCaret: true,
                            iconName: "pt-icon-folder-close",
                            label: <Tooltip content="foo">Folder 2</Tooltip>,
                            childNodes: [
                                { label: "No-Icon Item" },
                                { iconName: "pt-icon-tag", label: "Item 1" },
                                {
                                    hasCaret: true, iconName: "pt-icon-folder-close", label: "Folder 3",
                                    childNodes:  [
                                        { iconName: "document", label: "Item 0" },
                                        { iconName: "pt-icon-tag", label: "Item 1" },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            jsonSchema:{
                type: "object",
                properties: {
                    foo: {
                    type: "object",
                    properties: {
                        bar: {type: "string"}
                    }
                    },
                    baz: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                        description: {
                            "type": "string"
                        }
                        }
                    }
                    }
                }
                },
            uiSchema:{
                foo: {
                    bar: {
                    "ui:widget": "textarea"
                    },
                },
                baz: {
                    // note the "items" for an array
                    items: {
                    description: {
                        "ui:widget": "textarea"
                    }
                    }
                }
                },
            formData:{}
        }
    }


    handleCheckClick()
    {

        this.setState({editComponentClicked:false,edit:false,canDelete:false});

    }

    handleCloseClick()
    {
        this.setState({edit:false,canDelete:false});
    }
    handleAddClick() //调出增加Fields选择组件
    {
        this.setState({showWidgetChoose:true});
    }



    handleChooseClose() //关闭Fields选择组件
    {
        this.setState({showWidgetChoose:false});
    }

    handleChoose(itemId) //选择widget控件加入layout
    {
        
        
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

    handleNodeClick(nodeData, _nodePath, e)
    {
        const originallySelected = nodeData.isSelected;
        if (!e.shiftKey) {
            this.forEachNode(this.state.nodes, (n) => n.isSelected = false);
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        this.setState(this.state);
    }

    handleNodeCollapse(nodeData)
    {
        nodeData.isExpanded = false;
        this.setState(this.state);
    }

    handleNodeExpand (nodeData)
    {
        nodeData.isExpanded = true;
        this.setState(this.state);
    }
    render(){

        return (
            <div style={{'width':'100%','height':'100%'}}>
                <Form schema={this.state.jsonSchema}
                  uiSchema={this.state.uiSchema}
                />


                <GridEdit   clicked={this.state.editComponentClicked}
                                handleCheckClick={this.handleCheckClick.bind(this)} 
                                handleCloseClick={this.handleCloseClick.bind(this)}
                                handleAddClick={this.handleAddClick.bind(this)}
                    />

                    <FieldChoose show={this.state.showWidgetChoose} 
                                  handleChoose={this.handleChoose.bind(this)}
                                  handleChooseClose={this.handleChooseClose.bind(this)} 
                                  widgetItems={this.state.selectControls}
                                
                                  
                    >



                     <Tree
                            contents={this.state.nodes}
                            onNodeClick={this.handleNodeClick.bind(this)}
                            onNodeCollapse={this.handleNodeCollapse.bind(this)}
                            onNodeExpand={this.handleNodeExpand.bind(this)}
                            className={Classes.ELEVATION_0}
                        />

                    </FieldChoose>

            </div>
        );
    }
}



FormBuilder.propTypes={

}


export default DragDropContext(HTML5Backend)(FormBuilder);