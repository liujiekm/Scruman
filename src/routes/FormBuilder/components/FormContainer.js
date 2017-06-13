/*
    根据传入了controls 渲染界面

 */


import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import ReactGridLayout from 'react-grid-layout'

class FormContainer extends Component{
    constructor(props)
    {
        super(props)

    }



    render(){
        let {element,layout,cols,rowHeight,width,margin} = this.props;
        return(

                <ReactGridLayout className="layout" cols={cols} rowHeight={rowHeight} width={width} margin={margin} layouts={layouts} >
                    {element}
                </ReactGridLayout>


        );



    }
}


FormContainer.propTypes={
    element:PropTypes.element.isRequired,
    layouts:PropTypes.array.isRequired,
    cols:PropTypes.number.isRequired,
    rowHeight:PropTypes.number.isRequired,
    width:PropTypes.number.isRequired,
    margin:PropTypes.array.isRequired


}


export default FormContainer;