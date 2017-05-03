import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import PureRenderMixin  from 'react/lib/ReactComponentWithPureRenderMixin'
import ReactGridLayout from 'react-grid-layout'
//import ReactDOMServer from 'react/lib/ReactDOMServer'
import _ from 'lodash'
import path from 'path'
//import {Responsive, WidthProvider} from 'react-grid-layout';
import Widget from '../../../component/widget/Widget'
import SingleIndicate from '../../../component/widget/SingleIndicate'
import ModuleLoader from '../../../component/widget/ModuleLoader'
import uuid from 'uuid'
import GridEdit from '../../../common/GridEdit'
import WidgetChoose from '../../../common/WidgetChoose'
import WidgetConfigDialog from '../../../common/WidgetConfigDialog'
//const ResponsiveReactGridLayout = WidthProvider(Responsive);
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;




class Home extends Component{
    constructor(props)
    {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            edit:false,
            canDelete:false,
            editComponentClicked:false,
            showWidgetChoose:false,
            showConfigDialog:false,//是否打开widget 配置dialog
            widgets:[{


                        layoutId:"a",
                        widgetCreateObj:{
                            type:'SingleIndicate',
                            props:{
                                    bgColor:'rgb(108,202,201)', indicate:'22', desc:'New Users' ,iconClassName:'icon-comments icon-3x'
                                    }
                        }
                    },{
                        layoutId:"b",
                        widgetCreateObj:{
                            type:'SingleIndicate',
                            props:{
                                    bgColor:'rgb(255,109,96)', indicate:'140', desc:'Sales' ,iconClassName:'icon-tags icon-3x'
                                    }
                        }
                    },{
                        layoutId:"c",
                        widgetCreateObj:{
                            type:'SingleIndicate',
                            props:{
                                    bgColor:'rgb(248,211,71)', indicate:'345', desc:'New Order' ,iconClassName:'icon-shopping-cart icon-3x'
                                    }
                        }
                    },{
                        layoutId:"d",
                        widgetCreateObj:{
                            type:'SingleIndicate',
                            props:{
                                    bgColor:'rgb(87,200,242)', indicate:'34500', desc:'Total Profit' ,iconClassName:'icon-inbox icon-3x'
                                }
                        }
                    }],

            widgetValidation:[
                {type:'SingleIndicate',editable:{'indicate':{type:'text',data:''},'desc':{type:'text',data:''}}},
                {type:'SingleIndicate',editable:{'indicate':{type:'text',data:''},'desc':{type:'text',data:''}}},
            ],//widget 属性验证，包含属性用什么方式展示（配置修改的时候）
            
            
            layout:[{"i":"a","x":0,"y":0,"w":4,"h":1,"isDraggable":false,"isResizable":false},
                    {"i":"b","x":3,"y":0,"w":4,"h":1,"isDraggable":false,"isResizable":false},
                    {"i":"c","x":6,"y":0,"w":4,"h":1,"isDraggable":false,"isResizable":false},
                    {"i":"d","x":9,"y":0,"w":4,"h":1,"isDraggable":false,"isResizable":false}],
            widgetItems:[], //widget lists 的数据源
            selectedWidgetOption:{layoutId:'',props:{}} //当前待修改属性的widget的props配置内容

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




    onLayoutChange(layout){
        
        this.setState({layout:layout})       
    }

    componentWillMount(){

        //加载可以添加到grid layout中的widget 组件清单信息
        let fakeWorkItems = [
                                {
                                    id:'1',
                                    imgUrl:'./src/content/img/assignedToMe.png',
                                    widgetName:'焦点数据',
                                    widgetDesc:'集中显示用户比较关心的焦点数据，一目了然，明确，明显',
                                    widgetCreateObj:
                                        {
                                            type:'SingleIndicate',
                                            props:
                                                {
                                                    indicate:'911',
                                                    bgColor:'rgb(255,109,96)',
                                                    desc:'Happend',
                                                    iconClassName:'icon-tags icon-3x'
                                                },
                                            size:
                                            {
                                                w:3,
                                                    h:2
                                            }
                                        }
                                },
                                {
                                    id:'2',
                                    imgUrl:'./src/content/img/assignedToMe.png',
                                    widgetName:'示例数据',
                                    widgetDesc:'just something about component desc',
                                    widgetCreateObj:
                                        {
                                            type:'SingleIndicate',
                                            props:
                                                {
                                                    indicate:'555',
                                                    bgColor:'rgb(155,109,96)',
                                                    desc:'Already',
                                                    iconClassName:'icon-tags icon-3x'
                                                },
                                            size:
                                            {
                                                w:3,
                                                    h:2
                                            }
                                        }
                                },
                                {
                                    id:'3',
                                    imgUrl:'./src/content/img/assignedToMe.png',
                                    widgetName:'Echart Widget',
                                    widgetDesc:'历史趋势图',
                                    widgetCreateObj:
                                        {
                                            type:'EchartWidget',
                                            props:
                                                {
                                                    
                                                },
                                            size:
                                            {
                                                w:4,
                                                h:3
                                            }
                                        }
                                },
                                {
                                    id:'4',
                                    imgUrl:'./src/content/img/assignedToMe.png',
                                    widgetName:'Echart Detail Widget',
                                    widgetDesc:'详细图表',
                                    widgetCreateObj:
                                        {
                                            type:'EchartWidgetNormal',
                                            props:
                                                {
                                                    
                                                },
                                            size:
                                            {
                                                w:7,
                                                h:7
                                            }
                                        }
                                }
                            ]


        if(localStorage.homeLayout&&localStorage.widgets)
        {
            this.setState({layout:JSON.parse(localStorage.getItem('homeLayout')),widgets:JSON.parse(localStorage.getItem('widgets')),widgetItems:fakeWorkItems});
        }

    }
    componentWillUnmount()
    {
        localStorage.setItem('homeLayout',JSON.stringify(this.state.layout));
        localStorage.setItem('widgets',JSON.stringify(this.state.widgets));
    }
    componentDidMount()
    {
        
    }

    handleChooseClose() //关闭widgets选择组件
    {
        this.setState({showWidgetChoose:false});
    }
    handleChoose(itemId) //选择widget控件加入layout
    {
        //根据itemId获取WorkItems 中需要动态创建Component所需的变量
        let selectedItem = _.find(this.state.widgetItems,{id:itemId});
        let layoutId = uuid.v1();
        this.setState({
            layout:this.state.layout.concat({
                i: layoutId,
                x: 0,
                y: Infinity, // puts it at the bottom
                w: selectedItem.widgetCreateObj.size.w,
                h: selectedItem.widgetCreateObj.size.h,
                "isDraggable":true,
                "isResizable":false
            }),
            widgets:this.state.widgets.concat({
                layoutId:layoutId,
                widgetCreateObj:selectedItem.widgetCreateObj
            }),
            widgetItems:_.reject(this.state.widgetItems,{id:itemId}) //选择添加项目，添加之后不可以再次添加
        });
        
    }



    handleAddClick() //调出增加widgets选择组件
    {
        this.setState({showWidgetChoose:true});
    }

    //生成Grid Layout中的Grid Item
    produceGridItems(widget)
    {
        let element = React.createElement(ModuleLoader(widget.widgetCreateObj.type),{data:widget.widgetCreateObj.props});
        return (
            <div key={widget.layoutId}>
                <Widget  edit={this.state.edit} canDelete={this.state.canDelete} layoutId={widget.layoutId} 
                    handleDialogOpen={this.handleDialogOpen.bind(this,widget.widgetCreateObj.props,widget.layoutId)}
                    handleDelete={this.handleDelete.bind(this)}>
                    {element}
                </Widget>
            </div>
        );
    


    }

    handleDelete(layoutId)
    {

        this.setState({layout: _.reject(this.state.layout, {i: layoutId}),
                        widgets:_.reject(this.state.widgets,{layoutId:layoutId})});
    }

    handleDialogOpen(currentWidgetProps,layoutId)
    {
        this.setState({showConfigDialog:true,selectedWidgetOption:{layoutId:layoutId,props:currentWidgetProps}});
    }


    handleOptionSave(layoutId,savedWidgetProps,ifSave) //widget 配置项目修改保存 ifSave 判断是否需要保存
    {
        if(ifSave)
        {
            _.forEach(this.state.widgets,function(item){
                
                if(item.layoutId===layoutId)
                {
                    //item.widgetCreateObj.props=savedWidgetProps;
                    _.merge(item.widgetCreateObj.props,savedWidgetProps);
                }
            });
            this.setState({widget:this.state.widget,showConfigDialog:false});
        }
        else{
            this.setState({showConfigDialog:false});
        }
    }





    render(){

            return (
                <div>
                    <ReactGridLayout  className="layout" layout={this.state.layout}  
                        cols={10} rowHeight={30} width={1000} isDraggable={this.state.edit} margin={[15,15]}
                            onLayoutChange={this.onLayoutChange.bind(this)} >
                        {_.map(this.state.widgets, this.produceGridItems.bind(this))}
                    </ReactGridLayout>

                    <GridEdit   clicked={this.state.editComponentClicked}
                                handleCheckClick={this.handleCheckClick.bind(this)} 
                                handleCloseClick={this.handleCloseClick.bind(this)}
                                handleAddClick={this.handleAddClick.bind(this)}
                    />

                    <WidgetChoose show={this.state.showWidgetChoose} 
                                  handleChoose={this.handleChoose.bind(this)}
                                  handleChooseClose={this.handleChooseClose.bind(this)} 
                                  widgetItems={this.state.widgetItems}

                                  
                    />


                    <WidgetConfigDialog open={this.state.showConfigDialog}  
                                        
                                        handleOptionSave={this.handleOptionSave.bind(this)}
                                        widgetProps={this.state.selectedWidgetOption}/>
                </div>

            )

    }
}

export default Home;