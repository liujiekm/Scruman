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
            layout:[{"i":"a","x":0,"y":0,"w":3,"h":3,"isDraggable":false,"isResizable":false,"add":true},
                    {"i":"b","x":3,"y":0,"w":3,"h":3,"isDraggable":false,"isResizable":false,"add":true},
                    {"i":"c","x":6,"y":0,"w":3,"h":3,"isDraggable":false,"isResizable":false,"add":true},
                    {"i":"d","x":9,"y":0,"w":3,"h":3,"isDraggable":false,"isResizable":false,"add":true}]

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
            //console.log(this.state)
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
        
        if(localStorage.homeLayout)
        {
            this.setState({layout:JSON.parse(localStorage.getItem('homeLayout'))});
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
    handleChoose() //选择widget控件加入layout
    {

    }

    handleAddClick() //调出增加widgets选择组件
    {
        this.setState({showWidgetChoose:true});
    }
    render(){

            console.log(this.state,'render')
            return (

                <div>
                    <ReactGridLayout  className="layout" layout={this.state.layout}  cols={12} rowHeight={30} width={1000} isDraggable={this.state.edit}
                            onLayoutChange={this.onLayoutChange.bind(this)} >


                        <div key={'a'}>
                            <Widget itemKey={'a'} edit={this.state.edit} canDelete={this.state.canDelete}>
                                <SingleIndicate   bgColor={'rgb(108,202,201)'} indicate='22' desc='New Users' iconClassName='icon-comments icon-3x'/>

                            </Widget>
                        </div>

                        <div key={'b'}>
                            <Widget itemKey={'b'} edit={this.state.edit} canDelete={this.state.canDelete}>
                                <SingleIndicate   bgColor={'rgb(255,109,96)'} indicate='140' desc='Sales' iconClassName='icon-tags icon-3x'/>

                            </Widget>

                        </div>

                        <div key={'c'}>
                            <Widget itemKey={'c'} edit={this.state.edit} canDelete={this.state.canDelete}>
                                <SingleIndicate   bgColor={'rgb(248,211,71)'} indicate='345' desc='New Order' iconClassName='icon-shopping-cart icon-3x'/>

                            </Widget>

                        </div>

                        <div key={'d'}>
                            <Widget itemKey={'d'} edit={this.state.edit} canDelete={this.state.canDelete}>
                                <SingleIndicate   bgColor={'rgb(87,200,242)'} indicate='34500' desc='Total Profit' iconClassName='icon-inbox icon-3x'/>

                            </Widget>

                        </div>

                    </ReactGridLayout>

                    <GridEdit clicked={this.state.editComponentClicked}
                        handleCheckClick={this.handleCheckClick.bind(this)} 
                        handleCloseClick={this.handleCloseClick.bind(this)}
                        handleAddClick={this.handleAddClick.bind(this)}/>

                    <WidgetChoose show={this.state.showWidgetChoose} handleChoose={this.handleChoose.bind(this)}
                    handleChooseClose={this.handleChooseClose.bind(this)}
                    />
                </div>

            )

    }
}

export default Home;