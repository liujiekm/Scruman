import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class FormPanel extends Component{
    constructor(props)
    {
        super(props)
        this.state={

            layout:[]

        }
    }

   render(){

        return (

            <div className='formBackend'>
                <div className='toolBar'></div>


                <div className='formEditor'></div>

                <div className='fieldBar'></div>


            </div>


        );
    }


}


export default DragDropContext(HTML5Backend)(FormPanel);