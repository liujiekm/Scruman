import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureRenderMixin  from 'react/lib/ReactComponentWithPureRenderMixin'
//import ReactGridLayout from 'react-grid-layout'

import ReactDOMServer from 'react-dom/server'
import _ from 'lodash'
import Board from '../../../component/Chase/Board'
import reactTools from 'react-tools'

function observe(receive)
{
    setInterval(()=>receive([
        Math.floor(Math.random()*8),
        Math.floor(Math.random()*8)
    ]),500)
}


export default class Chase extends Component{

    constructor(props)
    {
        super(props)
        this.state={position:[0,0]}
    }

    componentDidMount()
    {
        // setInterval(()=>{
        //     this.setState({position:[Math.floor(Math.random()*8),Math.floor(Math.random()*8)]})
        // },500)

        //var boardString = ReactDOMServer.renderToStaticMarkup(<Board />);
        //localStorage.setItem('board',boardString);
        // var boardItem = localStorage.getItem('board');
        // var obj = reactTools.transform(aboutComponent,{harmony:true,es6module:true});
        // console.log(obj);
        this.state.test1='1111';
        this.setState(this.state);

    }
    handleSquareDrop(position)
    {
        this.setState({position:position});
    }

    render(){
        

        return(

                <Board knightPosition={this.state.position} handleSquareDrop={this.handleSquareDrop.bind(this)}/>


        )
    }

}