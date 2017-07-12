import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom'
import PureRenderMixin  from 'react/lib/ReactComponentWithPureRenderMixin'
import _ from 'lodash'
import Immutable from 'immutable'
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

import ControlConfigDialog from '../../../common/ControlConfigDialog'


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
                edit:false,
                canDelete:false,
                editComponentClicked:false,
                showWidgetChoose:false,
                showControlConfigDialog:false,   //控制控件配置页面dialog的打开与关闭
                // layouts:  [{"i":"a","x":18,"y":0,"w":2,"h":1,"isDraggable":true,"isResizable":true}],
                // controls:[{
                //             layoutId:"a",
                //             createOption:{
                //                 fieldId:'',
                //                 type:'BlueprintEditableText',
                //                 property:{
                //                         data:{key:'DemoInput',value:'',handleTextChange:function(value){}}
                //                     }
                //             }
                //         }
                // ],


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
                    //{id:'',name:'',value:'', type:'',defaultValue:'',control:'',dataSource:'',validation:''}//defaultValue、dataSource、validation 为方法体string
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
                            pageUrl:'',
                            layout:[{"i":"a","x":18,"y":0,"w":2,"h":1,"isDraggable":true,"isResizable":true}],//layouts
                            //页面内部的控件集合
                            controls:[
                                {
                                    layoutId:"a",
                                    fieldId:'', //关联到fieldDefinitions中的id
                                    createOption:{
                                        type:'BlueprintEditableText',
                                        property:{
                                                //控件本身的元数据描述
                                                controlKey:'DemoInput',
                                                value:'',
                                                defaultValue:'',
                                                dataSource:'',
                                                validation:'',
                                                handleChange:''
                                                
                                            }
                                    }
                                }
                            ]
                        }
                    ],
                //新增加页面的临时变量

                addedPage:{},
                //当前选中页面Id的临时变量
                currentPage:'',
                currentControlConfig:{}

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
            // this.setState({editComponentClicked:true,edit:true,canDelete:true,
            //     layouts:_.each(this.state.layouts,function(layout) {
            //         layout.isDraggable=true;
            //         layout.static=false;
            //     })  
            // });
            //找到对应页面的PageLayout中的layout 设置 isDraggable=true，static=false
            let currentPage = _.find(this.state.pageLayout,{pageId:this.state.currentPage});
            let currentPageLayout = _.result(currentPage,'layout');
            currentPageLayout.forEach(function(layout){
                layout.isDraggable=true;
                layout.static=false;
            });
            this.state.editComponentClicked=true;
            this.state.edit=true;
            this.state.canDelete=true;
            this.setState(this.state);

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

    }

    //删除指定PageLayout中的指定control
    handleDelete(layoutId)
    {
        //console.log(layoutId)
        let page = _.find(this.state.pageLayout,{pageId:this.state.currentPage});
        let controls = _.result(page,'controls');
        let layouts = _.result(page,'layout');
        let newControls=_.reject(controls,{layoutId:layoutId});
        let newLayouts=_.reject(layouts,{i:layoutId});

        page.controls=newControls;
        page.layout=newLayouts;
        this.setState(this.state);
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
    addPage(page)
    {
        let pages = this.state.pages;
        pages[0].childNodes.push({iconName: "document", label: page.name,id:page.name});
        


        //pageLayout中新增layout默认记录  ==>需要修改为工厂方法
        let pageLayout={
            pageId:page.name,
            pageUrl:page.url,
            layout:[{"i":"a","x":18,"y":0,"w":2,"h":1,"isDraggable":true,"isResizable":true}],
            controls:[{
                                layoutId:"a",
                                createOption:{
                                    fieldId:'', //关联到Fields中的Field
                                    type:'MaterialSelect',
                                    property:{
                                            controlKey:'DemoInput',value:page.name
                                        }
                                }
                    }]
        }
        this.state.pageLayout.push(pageLayout);
        
        //this.state.layouts.lg=[]; //或者初始化直接设置为空
    }
    handleAddDialogClose(page){
       
        this.addPage(page);
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

    handleAddDialogOpen(){
        this.setState({dialogOpen:true});
    }

    /* 新增页面dialog 回调方法*/
    handlePageNameChange(value)
    {


    }

    handlePageUrlChange(value)
    {

    }
    /* ----------------------*/

    //保存所有配置
    save()
    {
        console.log(this.state);
        localStorage.setItem('context',JSON.stringify(this.state));
    }
    //发布页面到指定路径
    publish()
    {

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
            control:fieldConfig.control,
            validation:fieldConfig.validation,
            dataSource:fieldConfig.dataSource
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

        //根据是Field或者Control来判断增加的内容
        let tab = this.state.navbarTabId;
        if(tab=='Fields')
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
                    "isDraggable":true,//添加进入的时候不允许拖动
                    "isResizable":true//添加进入的时候不允许拉伸
                });
            currentControls.push({
                layoutId:layoutId,
                fieldId:fieldDefinition.id, //关联到Fields中的Field
                createOption:{
                    type:fieldDefinition.control,
                    property:{
                            //控件本身的元数据描述
                            controlKey:fieldDefinition.name,
                            value:'',
                            defaultValue:fieldDefinition.defaultValue,
                            dataSource:fieldDefinition.dataSource,
                            validation:fieldDefinition.validation
                        
                        }
                }
            });
        }
        else if(tab=='Controls')
        {
            let controlOption =this.state.choosedControl;
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
                    "isDraggable":true,//添加进入的时候不允许拖动
                    "isResizable":true//添加进入的时候不允许拉伸
                });
            currentControls.push({
                layoutId:layoutId,
                fieldId:'', 
                createOption:{
                    type:controlOption.type,
                    property:controlOption.props
                }
            });
        }


        this.setState(this.state);

    }
    //打开修改已经添加到界面上的控件的配置信息Dialog
    openAddedControlConfig(control)
    {
        this.setState({showControlConfigDialog:true,currentControlConfig:control});
    }

    //保存控件的配置信息
    configConfigSave(layoutId,configuredControlProperty,ifSave) //widget 配置项目修改保存 ifSave 判断是否需要保存
    {
        if(ifSave)
        {
            //获取当前页面
            let currentPage = _.find(this.state.pageLayout,{pageId:this.state.currentPage});
            let currentPageLayout = _.result(currentPage,'layout');
            let currentControls = _.result(currentPage,'controls');
            _.forEach(currentControls,function(item){
                
                if(item.layoutId===layoutId)
                {
                    _.merge(item.createOption.property,configuredControlProperty);
                }
            });
            this.state.showControlConfigDialog = false;
            
        }
        else{
            this.state.showControlConfigDialog = false;
            
        }
        
        this.setState(this.state);
    }




    generateDOM(control) {

        let controlProperty = _.cloneDeep(control.createOption.property);
        controlProperty.defaultValue=new Function("var context = this.state;  return " +controlProperty.defaultValue +";").bind(this);
        controlProperty.validation=new Function("var context = this.state; return " +controlProperty.validation +";").bind(this);
        controlProperty.dataSource=new Function("var context = this.state; return " +controlProperty.dataSource +";").bind(this);
        //各控件传出value到state
        let handleChangeFunctionBody = "control.createOption.property.value=value;this.setState(this.state);"
        controlProperty.handleChange=new Function("control","value",handleChangeFunctionBody).bind(this,control);
        let element = React.createElement(ModuleLoader(control.createOption.type),controlProperty);
        
        return (
            <div key={control.layoutId}>
                <Widget  edit={this.state.edit} canDelete={this.state.canDelete} layoutId={control.layoutId} handleDelete={this.handleDelete.bind(this)}
                handleDialogOpen={this.openAddedControlConfig.bind(this,control)}>
                {element}
                </Widget>
            </div>
        );
    }

    //同步设置控件的大小
    handleResizeStop(layout, oldItem, newItem,
                     placeholder, e, element)
    {
        // console.log(layout)
        // console.log(oldItem)
        // console.log(newItem)
        // console.log(placeholder)
        // console.log(e)
        // console.log(element);
    }


    render(){


        let currentLayout = _.result(_.find(this.state.pageLayout,{pageId:this.state.currentPage}),'layout');
        let currentControls = _.result(_.find(this.state.pageLayout,{pageId:this.state.currentPage}),'controls');


        
        return (
            <div style={{'width':'100%','height':'100%'}}>
                

                <AddPageDialog isOpen={this.state.dialogOpen} 
                    handleAddDialogClose={this.handleAddDialogClose.bind(this)} 
                    handlePageNameChange={this.handlePageNameChange.bind(this)}
                    handlePageUrlChange={this.handlePageUrlChange.bind(this)} />
                <FieldConfigDialog fieldDialogOpen={this.state.fieldDialogOpen} fieldDialogClose={this.fieldDialogClose.bind(this)} fieldConfigSubmit={this.fieldConfigSubmit.bind(this)}/>
                
                <ControlConfigDialog open={this.state.showControlConfigDialog}  
                                        
                                        handleOptionSave={this.configConfigSave.bind(this)}
                                        controlConfig={this.state.currentControlConfig}/>
                
                <div className='pages-zone'>
                        <div className="pt-button-group .modifier">
                            <a className="pt-button pt-icon-add" tabIndex="0" role="button" onClick={this.handleAddDialogOpen.bind(this)}>Add Page</a>
                            <a className="pt-button pt-icon-confirm" tabIndex="0" role="button" onClick={this.save.bind(this)}>Save</a>
                            <a className="pt-button" tabIndex="0" role="button" onClick={this.publish.bind(this)}>
                                Publish
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
                            onResizeStop={this.handleResizeStop.bind(this)}
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
    verticalCompact:false,
    isResizable:true
    
}

FormBuilder.propTypes={

}


export default FormBuilder;