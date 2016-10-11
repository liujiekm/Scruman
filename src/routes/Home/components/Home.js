import React, { Component, PropTypes } from 'react'
import ReactGridLayout from 'react-grid-layout'
//import {Responsive, WidthProvider} from 'react-grid-layout';

import SingleIndicate from '../../../component/widget/SingleIndicate'
import uuid from 'uuid'


import GridEdit from '../../../common/GridEdit'



//const ResponsiveReactGridLayout = WidthProvider(Responsive);


var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;


class Home extends Component{

    constructor(props)
    {
        super(props)
        this.state={

            layout:[{"i":"a","x":0,"y":0,"w":3,"h":3,"isDraggable":true,"isResizable":false},
                    {"i":"b","x":3,"y":0,"w":3,"h":3,"isDraggable":true,"isResizable":false},
                    {"i":"c","x":6,"y":0,"w":3,"h":3,"isDraggable":true,"isResizable":false},
                    {"i":"d","x":9,"y":0,"w":3,"h":3,"isDraggable":true,"isResizable":false}]

        }
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
    render(){

            return (
                <ReactGridLayout  className="layout" layout={this.state.layout}  cols={12} rowHeight={30} width={1000}
                        onLayoutChange={this.onLayoutChange.bind(this)} >


                    <div key={'a'}>
                         <SingleIndicate   bgColor={'rgb(108,202,201)'} indicate='22' desc='New Users' iconClassName='icon-comments icon-3x'/>
                    </div>

                    <div key={'b'}>
                         <SingleIndicate   bgColor={'rgb(255,109,96)'} indicate='140' desc='Sales' iconClassName='icon-tags icon-3x'/>

                    </div>

                    <div key={'c'}>
                         <SingleIndicate   bgColor={'rgb(248,211,71)'} indicate='345' desc='New Order' iconClassName='icon-shopping-cart icon-3x'/>

                    </div>

                    <div key={'d'}>
                         <SingleIndicate   bgColor={'rgb(87,200,242)'} indicate='34500' desc='Total Profit' iconClassName='icon-inbox icon-3x'/>

                    </div>

                </ReactGridLayout>

            )

    }
}

export default Home;