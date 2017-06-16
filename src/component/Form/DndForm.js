import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from "react-jsonschema-form"
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'

class DndForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            jsonSchema:{
                type: "object",
                properties: {
                    foo: {
                    type: "object",
                    properties: {
                        bar: {type: "string"}
                    }
                    },
                    baz: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                        description: {
                            "type": "string"
                        }
                        }
                    }
                    }
                }
                },
            uiSchema:{
                foo: {
                    bar: {
                    "ui:widget": "textarea"
                    },
                },
                baz: {
                    // note the "items" for an array
                    items: {
                    description: {
                        "ui:widget": "textarea"
                    }
                    }
                }
                },
            formData:{}
        }
    }

    render(){
        return (
            <Form schema={this.state.jsonSchema}
                  uiSchema={this.state.uiSchema}
            />

        )
    }
}


export default DragDropContext(HTML5Backend)(DndForm);