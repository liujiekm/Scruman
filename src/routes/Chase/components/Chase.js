import React, { Component, PropTypes } from 'react'
import PureRenderMixin  from 'react/lib/ReactComponentWithPureRenderMixin'
//import ReactGridLayout from 'react-grid-layout'
import _ from 'lodash'
import Board from '../../../component/Chase/Board'

function observe(receive)
{
    setInterval(()=>receive([
        Math.floor(Math.random()*8),
        Math.floor(Math.random()*8)
    ]),500)
}


export default class Chase extends Component{

    render(){
        return(

            <Board knightPosition={[1,1]}/>

        )
    }

}