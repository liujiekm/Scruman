import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import PureRenderMixin  from 'react/lib/ReactComponentWithPureRenderMixin'
import _ from 'lodash'
import uuid from 'uuid'


import Widget from '../../../component/widget/Widget'
import GridEdit from '../../../common/GridEdit'

import FieldChoose from '../../../common/FieldChoose'
import ModuleLoader from '../../../component/widget/ModuleLoader'

import { Classes, ITreeNode, Tooltip, Tree, Switch, Tab2, Tabs2 } from "@blueprintjs/core"
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);



//Custom Form Designer
class FormBuilder extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            
            currentBreakpoint: 'lg',
            mounted: false,
            edit:false,
            canDelete:false,
            editComponentClicked:false,
            showWidgetChoose:false,
            layouts: {lg: [{"i":"a","x":18,"y":0,"w":4,"h":1,"isDraggable":true,"isResizable":true}
                   ]},
            controls:[{
                        layoutId:"a",
                        createOption:{
                            type:'MaterialText',
                            props:{
                                    data:{key:'DemoInput',value:''}
                                  }
                        }
                    }
            ],
            selectControls:[],
            //Tabs
            animate: true,
            navbarTabId: "Fields",
            //Tree
            nodes: [
                {
                    iconName: "folder-close",
                    isExpanded: true,
                    label: <Tooltip content="I'm a folder <3">Fields</Tooltip>,
                    childNodes: [
                        { iconName: "document", label: "Item 0"},
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
            ]
        }
    }

    handleCheckClick()
    {
        if(!this.state.editComponentClicked)
        {
            this.setState({editComponentClicked:true,edit:true,canDelete:true,
                layout:_.each(this.state.layout,function(layout) {
                    layout.isDraggable=true;
                    layout.static=false;
                })  
            });
        }else{
            this.setState({editComponentClicked:false,edit:false,canDelete:false});
        }
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
        //根据itemId获取WorkItems 中需要动态创建Component所需的变量
        let selectedItem = _.find(this.state.selectControls,{id:itemId});
        let layoutId = uuid.v1();
        this.setState({
            layouts:{lg:this.state.layouts.lg.concat({
                i: layoutId,
                x: 0,
                y: Infinity, // puts it at the bottom
                w: 1,
                h: 1,
                "isDraggable":true,
                "isResizable":true
            })},
            controls:this.state.controls.concat({
                layoutId:layoutId,
                createOption:selectedItem.widgetCreateObj
            })
        });
        
    }

    handleDelete(layoutId)
    {

        this.setState({layouts:{ lg:_.reject(this.state.layouts.lg, {i: layoutId})},
                        controls:_.reject(this.state.controls,{layoutId:layoutId})});
    }
    generateDOM(control) {
        let element = React.createElement(ModuleLoader(control.createOption.type),control.createOption.props);
        return (
            <div key={control.layoutId}>
                <Widget  edit={this.state.edit} canDelete={this.state.canDelete} layoutId={control.layoutId} handleDelete={this.handleDelete.bind(this)}>
                {element}
                </Widget>
            </div>
        );
    }

    onBreakpointChange(breakpoint){
        this.setState({
        currentBreakpoint: breakpoint
        });
    };

    onLayoutChange(layout, layouts){
        
    };

    onNewLayout(){
        this.setState({
        layouts: {lg: generateLayout()}
        });
    };


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




    componentWillMount(){

        //加载可以添加到grid layout中的widget 组件清单信息
        let fakeSelectControls = [
                                {
                                    id:'1',
                                    imgUrl:'./src/content/img/assignedToMe.png',
                                    widgetName:'文本框',
                                    widgetDesc:'输入文本内容',
                                    widgetCreateObj:
                                        {
                                            type:'MaterialText',
                                            props:
                                                {
                                                    
                                                    
                                                }
                                        }
                                },
                                {
                                    id:'2',
                                    imgUrl:'./src/content/img/assignedToMe.png',
                                    widgetName:'下拉列表',
                                    widgetDesc:'选择内容',
                                    widgetCreateObj:
                                        {
                                            type:'MaterialSelect',
                                            props:
                                                {
                                                    
                                                }
                                        }
                                },
                                {
                                    id:'3',
                                    imgUrl:'./src/content/img/assignedToMe.png',
                                    widgetName:'表格',
                                    widgetDesc:'呈现表格内容',
                                    widgetCreateObj:
                                        {
                                            type:'MaterialTable',
                                            props:
                                                {
                                                    
                                                }
                                        }
                                },
                            ]
        this.setState({selectControls:fakeSelectControls});


        
    }

    handleNavbarTabChange(navbarTabId) 
    {
        this.setState({ navbarTabId });
    }

    render(){

        return (
            <div style={{'width':'100%','height':'100%'}}>
                <form>
                    <ResponsiveReactGridLayout
                            {...this.props}
                            layouts={this.state.layouts}
                            onBreakpointChange={this.onBreakpointChange.bind(this)}
                            onLayoutChange={this.onLayoutChange}
                            // WidthProvider option
                            measureBeforeMount={false}
                            // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                            // and set `measureBeforeMount={true}`.
                            useCSSTransforms={this.state.mounted}>
                            {_.map(this.state.controls, this.generateDOM.bind(this))}
                    </ResponsiveReactGridLayout>
                </form>
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

                        <Tabs2
                            animate={this.state.animate}
                            className={Classes.LARGE}
                            id="navbar"
                            onChange={this.handleNavbarTabChange.bind(this)}
                            selectedTabId={this.state.navbarTabId}
                        >
                            <Tab2 id="Fields" title="Fields" panel={<Tree
                                        contents={this.state.nodes}
                                        onNodeClick={this.handleNodeClick.bind(this)}
                                        onNodeCollapse={this.handleNodeCollapse.bind(this)}
                                        onNodeExpand={this.handleNodeExpand.bind(this)}
                                        className={Classes.ELEVATION_0}
                                    />}/>




                            <Tab2 id="DataSource" title="Data Source" />
                            <Tab2 id="Builds" title="Builds" />
                        </Tabs2>



                    </FieldChoose>

            </div>
        );
    }
}

FormBuilder.defaultProps = {
    className: "layout",
    rowHeight: 30,
    cols: {lg: 36, md: 10, sm: 6, xs: 4, xxs: 2},
    verticalCompact:false
    
}

FormBuilder.propTypes={

}


export default FormBuilder;