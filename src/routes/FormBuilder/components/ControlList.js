/*Form Designer 界面右侧的控件选择清单 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ControlList extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            controls:[]
        }
    }


    componentDidMount()
    {
        //加载控件集合
        let fakeWorkItems = [
                                {
                                    id:'1',
                                    imgUrl:'./src/content/img/assignedToMe.png',
                                    widgetName:'Blueprint Button',
                                    widgetDesc:'按钮',
                                    widgetCreateObj:
                                        {
                                            type:'BlueprintButton',
                                            props:
                                                {
                                                    text:'按钮'
                                                },
                                            size:
                                            {
                                                w:3,
                                                h:3
                                            }
                                        }
                                }
                            ];
            this.setState({controls:fakeWorkItems});



        
    }

    generageControlList(controls)
    {
        let controlList = [];
        var self = this;
        this.state.controls.forEach(function(control){
            controlList.push(<ControlItem key={control.id} {...control} handleItemClick={self.props.controlChoose.bind(self,control.widgetCreateObj)}/>);
        });
        return controlList;
    }

    render()
    {
        return (
            <div>
                {this.generageControlList(this.state.controls)}
            </div>
        )
    }
}






class ControlItem extends Component{

    handleItemClick()
    {
        $(this.refs.widgetItem).addClass('selected tabhover').siblings().removeClass('selected tabhover');
        this.props.handleItemClick(this.props.widgetCreateObj);
    }

    render()
    {

        let {imgUrl,widgetName,widgetDesc,widgetCreateObj} = this.props
        return (

                <div ref='widgetItem' className="widget-preview-tile ui-draggable ui-draggable-handle" onClick={this.handleItemClick.bind(this)}>
                    <div className="widget-maincontent">
                        <img className="widget-preview-image" src={imgUrl} />
                        <div className="widget-preview-text">
                            <div className="widget-name">{widgetName}</div>
                            <div className="widget-description">{widgetDesc}</div> 
                        </div>
                    </div>
                    <div className="widget-preview-moreinfo">
                        <div className="widget-publishername">By Jay</div>
                        <div className="widget-learnmore-link">
                            <a href="https://go.microsoft.com/fwlink/?linkid=823684" target="_blank">学习更多</a>
                            <span className="bowtie-icon bowtie-navigate-external"></span>
                        </div>
                    </div>
                </div>
        )
    }

}


ControlList.propTypes={
    controlChoose:PropTypes.func.isRequired
}


ControlItem.propTypes={
    imgUrl:PropTypes.string.isRequired,
    widgetName:PropTypes.string.isRequired,
    widgetDesc:PropTypes.string.isRequired,
    widgetCreateObj:PropTypes.object.isRequired,
    handleItemClick:PropTypes.func.isRequired


}



module.exports = ControlList;
