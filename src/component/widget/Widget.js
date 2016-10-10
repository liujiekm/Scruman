/*
    提供所有widget的通用功能：编辑，删除
    纯功能性的
 */

import React, { Component, PropTypes } from 'react';

class Widget extends Component{
    constructor(props)
    {
        super(props)

    }

    render(){

        return (

            <div>
            </div>

        )
    }



}


Widget.propTypes={
    edit:PropTypes.bool.isRequired

}