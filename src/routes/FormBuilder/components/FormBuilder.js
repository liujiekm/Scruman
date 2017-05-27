import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import PureRenderMixin  from 'react/lib/ReactComponentWithPureRenderMixin'
import _ from 'lodash'
import uuid from 'uuid'

import Form from "react-jsonschema-form"



const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};
const log = (type) => console.log.bind(console, type);


//Custom Form Designer
class FormBuilder extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            editComponentClicked:false,
            showWidgetChoose:false,
            selectControls:[]
        }
    }



    render(){

        return (
            <div>
                <Form schema={schema}
                        onChange={log("changed")}
                        onSubmit={log("submitted")}
                        onError={log("errors")} />




            </div>
        );
    }
}



FormBuilder.propTypes={

}


export default FormBuilder;