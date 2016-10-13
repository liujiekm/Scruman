
/*
    选择需要加入dashboard中组件的选择组件组件项
*/


import React, { Component, PropTypes } from 'react'

class WidgetChooseItem extends Component{



    handleItemClick()
    {
        $(this.refs.widgetItem).addClass('selected tabhover').siblings().removeClass('selected tabhover');
        this.props.handleItemClick(this.props.itemId);
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


WidgetChooseItem.propTypes={
    imgUrl:PropTypes.string.isRequired,
    widgetName:PropTypes.string.isRequired,
    widgetDesc:PropTypes.string.isRequired,
    widgetCreateObj:PropTypes.object.isRequired,
    handleItemClick:PropTypes.func.isRequired


}
module.exports = WidgetChooseItem;




