
import React, { Component, PropTypes } from 'react';



import AddIcon from 'material-ui/svg-icons/content/add';
import SaveIcon from 'material-ui/svg-icons/action/done';
import EditIcon from 'material-ui/svg-icons/image/edit';

class GridEidt extends Component{

    constructor(props)
    {
        super(props);

    }


    handleMouseOver(e){
        if(!this.props.clicked)
        {
            $(this.refs.editPannel).addClass('menu-open');
        }
    }

    handleMouseOut(e){
        if(!this.props.clicked)
        {
            $(this.refs.editPannel).removeClass('menu-open');
        }
    }

    handleCheckClick(e)
    {
        if(!this.props.clicked)
        {
            $(this.refs.editPannel).addClass('menu-pinned-open');
            
        }else{
            $(this.refs.editPannel).removeClass('menu-pinned-open');
            $(this.refs.editPannel).removeClass('menu-open');
            
        }
        this.props.handleCheckClick();
    }

    handleCloseClick(e)
    {
        this.props.handleCloseClick();
    }


    handleAddClick(e) //调出增加widgets选择组件
    {
        this.props.handleAddClick()
    }
    render(){

        return (
                <div ref='editPannel' className="dashboard-edit-menu-container" 
                        onMouseOver={this.handleMouseOver.bind(this)}
                        onMouseOut={this.handleMouseOut.bind(this)}
                        >
                    <div role="button"  title="Edit Dashboard" className="button menu-toggle-button propagate-keydown-event" >
                        <div className="button-icon closed-icon bowtie-edit"
                            >
                            <EditIcon color={'white'}/>
                        </div>
                        <div className="button-icon open-icon bowtie-check" 
                            onClick={this.handleCheckClick.bind(this)}>
                            <SaveIcon color={'white'}/>
                        </div>
                    </div>
                    <div className="edit-menu" onClick={this.handleAddClick.bind(this)}>
                        <div role="button"  title="Add Widget" className="button add-widget-button propagate-keydown-event" >
                            <div className="button-icon bowtie-math-plus">
                                <AddIcon color={'white'} />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}


GridEidt.propTypes={
    clicked:PropTypes.bool.isRequired,
    handleCheckClick:PropTypes.func.isRequired,
    handleAddClick:PropTypes.func.isRequired
}


module.exports= GridEidt;