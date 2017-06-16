import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom'
import PureRenderMixin  from 'react/lib/ReactComponentWithPureRenderMixin'
import _ from 'lodash'
import uuid from 'uuid'

//字段值对象
import Field from '../../../content/data/field'
import Widget from '../../../component/widget/Widget'
import GridEdit from '../../../common/GridEdit'
import FormDesignerConfig from './FormDesignerConfig'

import ControlList from './ControlList'

import ModuleLoader from '../../../component/widget/ModuleLoader'
import { Classes, ITreeNode, Tooltip, Tree, Switch, Tab2, Tabs2,Dialog } from "@blueprintjs/core"
import AddPageDialog from './AddPageDialog'
import FieldConfigDialog from './FieldConfigDialog'


import ReactGridLayout from 'react-grid-layout'
import {Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);



//Custom Form Designer
class FormBuilder extends Component{
    constructor(props)
    {
        super(props);
        

        //上下文对象传递给control中的回调函数
        var context = this;

        //从存储中加载当前state
        var currentState = localStorage.getItem('context');
        if(currentState)
        {
            this.state=JSON.parse(currentState);
        }
        else
        {
            this.state={
                mounted: false,
                edit:true,
                canDelete:false,
                editComponentClicked:false,
                showWidgetChoose:false,
                layouts:  [{"i":"a","x":18,"y":0,"w":2,"h":1,"isDraggable":true,"isResizable":true}],
                controls:[{
                            layoutId:"a",
                            createOption:{
                                fieldId:'',
                                type:'BlueprintEditableText',
                                property:{
                                        data:{key:'DemoInput',value:'',handleTextChange:function(value){}}
                                    }
                            }
                        }
                ],


                //页面右侧的Config上的Add按钮是否可用变量
                configAddButtonDisable:false,
                //可选择加入页面的控件集合
                selectControls:[],
                //Tabs
                
                //页面右侧的Config上的Field临时选择变量
                choosedField:{},


                //页面右侧的Config上的Control临时选择变量
                choosedControl:{},


                animate: true,
                navbarTabId: "Fields",
                //Field Tree 代表创建的页面中的字段
                fields: [
                    {
                        iconName: "folder-open",
                        id:'root',
                        key:'root',
                        isExpanded: true,
                        childNodes: [


                        ],
                    },
                ],
                //字段编辑新增dialog是否弹出变量
                fieldDialogOpen:false,
                //界面的字段定义
                fieldDefinitions:[
                    {id:'',name:'',value:'', type:'',defaultValue:'',control:''}
                ],

                //暂存field 的控件属性
                //fieldControl:[{fieldId:'',controlType:'',dataSource:''}],

                //暂存field config属性
                //fieldConfig:{},

                //页面新增dialog是否弹出变量
                dialogOpen:false,
                //Page Tree 代表创建的页面清单 需要保存
                pages: [
                    {
                        id:'root',
                        key:'root',
                        iconName: "folder-open",
                        isExpanded: true,
                        childNodes: [
                            { iconName: "document", label: "Demo1",id:'Demo1',key:'Demo1'},
                        ],
                    },
                ],
                //所有页面的layout的配置项 需要保存
                pageLayout:[
                        {
                            pageId:'Demo1',//==》pages-->id
                            layout:[{"i":"a","x":18,"y":0,"w":2,"h":1,"isDraggable":true,"isResizable":true}],//layouts
                            //页面内部的控件集合
                            controls:[
                                {
                                    layoutId:"a",
                                    fieldId:'', //关联到Fields中的Field
                                    createOption:{
                                        type:'BlueprintEditableText',
                                        property:{
                                                //控件本身的元数据描述
                                                key:'DemoInput',
                                                value:'',
                                                defaultValue:function(context){eval('')},
                                                dataSource:function(context){eval('')},
                                                validation:function(context){eval('')},
                                                required:false
                                                
                                            }
                                    }
                                }
                            ],
                            fields:[]
                        }
                    ],
                //新增加页面的临时变量
                addedPageName:'',
                //当前选中页面Id的临时变量
                currentPage:''

            }
        }
    }



    componentDidMout()
    {
        //初始化fields 以及fieldDefinition
        //this.state.fieldDefinitions=[];

        
    }


    produceFields()
    {
        // 界面域值的对象模型
        var field ={
            name:'',
            id:'',
            control:'',
            defaultValue:'',
            dataSource:'',
        }
    }







    handleCheckClick()
    {
        if(!this.state.editComponentClicked)
        {
            this.setState({editComponentClicked:true,edit:true,canDelete:true,
                layouts:_.each(this.state.layouts,function(layout) {
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
    handleAddClick() //调出Config组件
    {
        this.setState({showWidgetChoose:true});
    }



    handleChooseClose() //关闭Config组件
    {
        this.setState({showWidgetChoose:false});
    }




    handleChoose(itemId) //选择widget控件加入layout
    {
        //根据itemId获取WorkItems 中需要动态创建Component所需的变量
        let selectedItem = _.find(this.state.selectControls,{id:itemId});
        let layoutId = uuid.v1();
        this.setState({
            layouts:this.state.layouts.concat({
                i: layoutId,
                x: 0,
                y: Infinity, // puts it at the bottom
                w: 1,
                h: 1,
                "isDraggable":true,
                "isResizable":true
            }),
            controls:this.state.controls.concat({
                layoutId:layoutId,
                createOption:selectedItem.widgetCreateObj
            })
        });
        
    }

    //删除指定PageLayout中的指定control
    handleDelete(layoutId)
    {
        console.log(layoutId)
        // let page = _.find(this.state.pageLayout,{pageId:this.state.currentPage});
        // let controls = _.result(page,'controls');
        // let layouts = _.reject(page,'layout');
        // _.reject(controls,{layoutId:layoutId});
        // _.reject(layouts,{i:layoutId});
        // this.setState(this.state);
    }
    generateDOM(control) {

        let element = React.createElement(ModuleLoader(control.createOption.type),control.createOption.property);
        
        return (
            <div key={control.layoutId}>
                <Widget  edit={this.state.edit} canDelete={this.state.canDelete} layoutId={control.layoutId} handleDelete={this.handleDelete.bind(this)}>
                {element}
                </Widget>
            </div>
        );
    }

    onBreakpointChange(breakpoint){

    };





    //保存指定page的layout
    onLayoutChange(layout){
        //获取选中的page
        let pageLayout = _.find(this.state.pageLayout,{pageId:this.state.currentPage});
        pageLayout.layout=layout;
        this.setState(this.state);

    };

    // findPage(nodes) {
    //     if (nodes == null) {
    //         return;
    //     }
    //     for (const node of nodes) {
    //         if (node.isSelected) {
    //             return node.pageId;
    //         }
    //         this.findPage(node.childNodes);
    //     }
    // }

    handleNodeClick(nodeData, _nodePath, e)
    {
        const originallySelected = nodeData.isSelected;
        if (!e.shiftKey) {
            this.forEachNode(this.state.fields, (n) => n.isSelected = false);
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        this.state.choosedField = nodeData;

        this.setState(this.state);
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


    handleNodeContextMenu(nodeData)
    {
        
    }



    componentWillMount(){


    }

    handleNavbarTabChange(navbarTabId) 
    {
        this.setState({ navbarTabId });
    }


    //页面树形结构添加页面条目
    addPage(name)
    {
        let pages = this.state.pages;
        pages[0].childNodes.push({iconName: "document", label: name,id:name});
        


        //pageLayout中新增layout默认记录  ==>需要修改为工厂方法
        let pageLayout={
            pageId:name,
            layout:[{"i":"a","x":18,"y":0,"w":2,"h":1,"isDraggable":true,"isResizable":true}],
            controls:[{
                                layoutId:"a",
                                createOption:{
                                    fieldId:'', //关联到Fields中的Field
                                    type:'MaterialSelect',
                                    property:{
                                            data:{key:'DemoInput',value:name}
                                        }
                                }
                    }]
        }
        this.state.pageLayout.push(pageLayout);
        
        //this.state.layouts.lg=[]; //或者初始化直接设置为空
    }
    handleAddDialogClose(){
        this.addPage(this.state.addedPageName);
        this.state.dialogOpen=false;
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
        let controls = _.result(_.find(this.state.pageLayout,{pageId:pageId}),'controls');
        this.state.controls=controls;    
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

    handleAddDialogOpen(){
        this.setState({dialogOpen:true});
    }


    handlePageNameChange(value)
    {
        this.setState({addedPageName:value});
    }

    //保存所有配置
    save()
    {
        localStorage.setItem('context',JSON.stringify(this.state));
    }


    //新增 编辑 Field Dialog 方法
    handleFieldDialogOpen()
    {
        this.setState({fieldDialogOpen:true});
    }
    fieldDialogClose()
    {
        this.setState({fieldDialogOpen:false});
    }
    fieldConfigEdit()
    {

    }


    //field dialog config 配置项保存
    fieldConfigSubmit(fieldConfig)
    {
        //创建field ID
        //{id:'',name:'',value:'', type:'',defaultValue:'',control:''}
        let savedFieldConfig = {
            id:uuid.v1(),
            name:fieldConfig.fieldName,
            type:fieldConfig.type,
            defaultValue:fieldConfig.defaultValue,
            control:fieldConfig.control
        };
        this.state.fieldDefinitions.push(savedFieldConfig);
        this.state.fields[0].childNodes.push({ iconName: "label", label: savedFieldConfig.name,id:savedFieldConfig.id,key:savedFieldConfig.id});
        this.state.fieldDialogOpen=false;
        this.setState(this.state);
    }



    //Form Designer Config 中的controls的选择事件
    controlChoose(controlOption)
    {
        this.state.choosedControl = controlOption;
    }

    //Form Designer Config 中的Add 按钮点击事件
    //如果是控件 则把当前选择的控件加入pageLayout的控件集合
    //如果是Field 则把当前选择的Field加入Field集合
    configAdd()
    {
        //根据选中field 找到fieldDefinition 中的field定义
        let fieldDefinition = _.find(this.state.fieldDefinitions,{id:this.state.choosedField.id});
        //field 与pageLayhout中的control 关联
        let currentPage = _.find(this.state.pageLayout,{pageId:this.state.currentPage});
        let currentPageLayout = _.result(currentPage,'layout');
        let currentControls = _.result(currentPage,'controls');



        let layoutId = uuid.v1();
        currentPageLayout.push({
                i: layoutId,
                x: 0,
                y: Infinity, // puts it at the bottom
                w: 1,
                h: 1,
                "isDraggable":true,
                "isResizable":false
            });
        currentControls.push({
            layoutId:layoutId,
            fieldId:fieldDefinition.id, //关联到Fields中的Field
            createOption:{
                type:fieldDefinition.control,
                property:{
                        //控件本身的元数据描述
                        key:fieldDefinition.name,
                        value:'',
                        defaultValue:function(context){eval('')},
                        dataSource:function(context){eval('')},
                        validation:function(context){eval('')},
                        required:false
                        
                    }
            }
        });


        this.setState(this.state);

    }
    render(){


        let currentLayout = _.result(_.find(this.state.pageLayout,{pageId:this.state.currentPage}),'layout');
        let currentControls = _.result(_.find(this.state.pageLayout,{pageId:this.state.currentPage}),'controls');


        
        return (
            <div style={{'width':'100%','height':'100%'}}>
                

                <AddPageDialog isOpen={this.state.dialogOpen} handleAddDialogClose={this.handleAddDialogClose.bind(this)} handlePageNameChange={this.handlePageNameChange.bind(this)} />
                <FieldConfigDialog fieldDialogOpen={this.state.fieldDialogOpen} fieldDialogClose={this.fieldDialogClose.bind(this)} fieldConfigSubmit={this.fieldConfigSubmit.bind(this)}/>
                <div className='pages-zone'>
                        <div className="pt-button-group .modifier">
                            <a className="pt-button pt-icon-add" tabIndex="0" role="button" onClick={this.handleAddDialogOpen.bind(this)}>Add Page</a>
                            <a className="pt-button pt-icon-confirm" tabIndex="0" role="button" onClick={this.save.bind(this)}>Save</a>
                            <a className="pt-button" tabIndex="0" role="button">
                                Options <span className="pt-icon-standard pt-icon-caret-down pt-align-right"></span>
                            </a>
                        </div>
                        <Tree
                            contents={this.state.pages}
                            onNodeClick={this.handlePageNodeClick.bind(this)}
                            onNodeCollapse={this.handleNodeCollapse.bind(this)}
                            onNodeExpand={this.handleNodeExpand.bind(this)}
                            className={Classes.ELEVATION_0}
                            onNodeContextMenu={this.handleNodeContextMenu.bind(this)}
                        />
                    
                    </div>
                <form className='form-designer'>
                    <ReactGridLayout
                            {...this.props}
                            layout={currentLayout}
                            //onBreakpointChange={this.onBreakpointChange.bind(this)}
                            onLayoutChange={this.onLayoutChange.bind(this)}
                            isDraggable={this.state.edit}
                            // WidthProvider option
                            //measureBeforeMount={false}
                            // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                            // and set `measureBeforeMount={true}`.
                            useCSSTransforms={this.state.mounted}
                            >
                            {_.map(currentControls, this.generateDOM.bind(this))}
                    </ReactGridLayout>
                </form>
                
                <GridEdit   clicked={this.state.editComponentClicked}
                                handleCheckClick={this.handleCheckClick.bind(this)} 
                                handleCloseClick={this.handleCloseClick.bind(this)}
                                handleAddClick={this.handleAddClick.bind(this)}
                    />

                    <FormDesignerConfig show={this.state.showWidgetChoose} 
                                  configAddButtonDisable={this.state.configAddButtonDisable}
                                  handleChoose={this.handleChoose.bind(this)}
                                  handleChooseClose={this.handleChooseClose.bind(this)} 
                                  widgetItems={this.state.selectControls}
                                  configAdd={this.configAdd.bind(this)}
                                
                                  
                    >

                        <Tabs2
                            animate={this.state.animate}
                            className={Classes.LARGE}
                            id="navbar"
                            onChange={this.handleNavbarTabChange.bind(this)}
                            selectedTabId={this.state.navbarTabId}
                        >
                            <Tab2 id="Fields" title="Fields" panel={

                                <div>
                                    <div className="pt-button-group .modifier">
                                        <a className="pt-button pt-icon-add" tabIndex="0" role="button" onClick={this.handleFieldDialogOpen.bind(this)}></a>
                                        <a className="pt-button pt-icon-edit" tabIndex="0" role="button" onClick={this.fieldConfigEdit.bind(this)}></a>
                                        <a className="pt-button pt-icon-cross" tabIndex="0" role="button"></a>
                                    </div>
                                    <Tree
                                            contents={this.state.fields}
                                            onNodeClick={this.handleNodeClick.bind(this)}
                                            onNodeCollapse={this.handleNodeCollapse.bind(this)}
                                            onNodeExpand={this.handleNodeExpand.bind(this)}
                                            className={Classes.ELEVATION_0}
                                    />
                               </div>
                            }/>



                            <Tab2 id="Controls" title="Controls"  panel={<ControlList controlChoose={this.controlChoose.bind(this)}/>}/>
                            <Tab2 id="DataSource" title="Data Source" />

                        </Tabs2>



                    </FormDesignerConfig>

            </div>
        );
    }
}

FormBuilder.defaultProps = {
    className: "layout",
    rowHeight: 30,
    width:1200,
    cols: 36,
    verticalCompact:false
    
}

FormBuilder.propTypes={

}


export default FormBuilder;