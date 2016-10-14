import React, { Component, PropTypes } from 'react'
import ReactGridLayout from 'react-grid-layout'
import ReactDOMServer from 'react-dom/server'
import _ from 'lodash'
//import {Responsive, WidthProvider} from 'react-grid-layout';
import Widget from '../../../component/widget/Widget'
import SingleIndicate from '../../../component/widget/SingleIndicate'
import uuid from 'uuid'
import GridEdit from '../../../common/GridEdit'
import WidgetChoose from '../../../common/WidgetChoose'
//const ResponsiveReactGridLayout = WidthProvider(Responsive);
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;




class Home extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            edit:false,
            canDelete:false,
            editComponentClicked:false,
            showWidgetChoose:false,
            widgets:[{
                        layout:{"x":0,"y":0,"w":3,"h":1,"isDraggable":false,"isResizable":false},
                        widgetCreateObj:{
                                            type:'SingleIndicate',
                                            props:{
                                                    bgColor:'rgb(108,202,201)', indicate:'22', desc:'New Users' ,iconClassName:'icon-comments icon-3x'
                                                  }
                                        }
                    },{
                        layout:{"x":3,"y":0,"w":3,"h":1,"isDraggable":false,"isResizable":false},
                        widgetCreateObj:{
                            type:'SingleIndicate',
                            props:{
                                    bgColor:'rgb(255,109,96)', indicate:'140', desc:'Sales' ,iconClassName:'icon-tags icon-3x'
                                    }
                        }
                    },{
                        layout:{"x":6,"y":0,"w":3,"h":1,"isDraggable":false,"isResizable":false},
                        widgetCreateObj:{
                            type:'SingleIndicate',
                            props:{
                                    bgColor:'rgb(248,211,71)', indicate:'345', desc:'New Order' ,iconClassName:'icon-shopping-cart icon-3x'
                                    }
                        }
                    },{
                        layout:{"x":9,"y":0,"w":3,"h":1,"isDraggable":false,"isResizable":false},
                        widgetCreateObj:{
                            type:'SingleIndicate',
                            props:{
                                    bgColor:'rgb(87,200,242)', indicate:'34500', desc:'Total Profit' ,iconClassName:'icon-inbox icon-3x'
                                    }
                        }
                    }],


            layout:[{"i":"a","x":0,"y":0,"w":3,"h":1,"isDraggable":false,"isResizable":false},
                    {"i":"b","x":3,"y":0,"w":3,"h":1,"isDraggable":false,"isResizable":false},
                    {"i":"c","x":6,"y":0,"w":3,"h":1,"isDraggable":false,"isResizable":false},
                    {"i":"d","x":9,"y":0,"w":3,"h":1,"isDraggable":false,"isResizable":false}],
            widgetItems:[] //widget lists 的数据源

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
                                                }
                                        }
                                }
                            ]


        if(localStorage.homeLayout)
        {
            this.setState({layout:JSON.parse(localStorage.getItem('homeLayout')),widgetItems:fakeWorkItems});
        }
    }
    componentWillUnmount()
    {
        localStorage.setItem('homeLayout',JSON.stringify(this.state.layout));
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
        this.setState({
        widgets:this.state.widgets.concat({})


        });
        
    }



    handleAddClick() //调出增加widgets选择组件
    {
        this.setState({showWidgetChoose:true});
    }

    //生成Grid Layout中的Grid Item
    produceGridItems(widget)
    {
        return (
            <div key={uuid.v1()} data-grid={widget.layout}>
                <Widget  edit={this.state.edit} canDelete={this.state.canDelete}>
                    {React.createElement(widget.widgetCreateObj.type,widget.widgetCreateObj.props)}
                </Widget>
            </div>


        );
    }



    render(){

            return (

                <div>
                    <ReactGridLayout  className="layout" layout={this.state.layout}  
                        cols={12} rowHeight={30} width={1000} isDraggable={this.state.edit}
                            onLayoutChange={this.onLayoutChange.bind(this)} >


                        <div key={'a'} >
                            <Widget edit={this.state.edit} canDelete={this.state.canDelete}>
                                <SingleIndicate   bgColor={'rgb(108,202,201)'} indicate='22' desc='New Users' iconClassName='icon-comments icon-3x'/>

                            </Widget>
                        </div>

                        <div key={'b'}>
                            <Widget edit={this.state.edit} canDelete={this.state.canDelete}>
                                <SingleIndicate   bgColor={'rgb(255,109,96)'} indicate='140' desc='Sales' iconClassName='icon-tags icon-3x'/>

                            </Widget>

                        </div>

                        <div key={'c'}>
                            <Widget edit={this.state.edit} canDelete={this.state.canDelete}>
                                <SingleIndicate   bgColor={'rgb(248,211,71)'} indicate='345' desc='New Order' iconClassName='icon-shopping-cart icon-3x'/>

                            </Widget>

                        </div>

                        <div key={'d'}>
                            <Widget edit={this.state.edit} canDelete={this.state.canDelete}>
                                <SingleIndicate   bgColor={'rgb(87,200,242)'} indicate='34500' desc='Total Profit' iconClassName='icon-inbox icon-3x'/>

                            </Widget>

                        </div>

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
                </div>

            )

    }
}

export default Home;