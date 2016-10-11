
import React, { Component, PropTypes } from 'react';



import AddIcon from 'material-ui/svg-icons/content/add';
import SaveIcon from 'material-ui/svg-icons/action/done';
import EditIcon from 'material-ui/svg-icons/image/edit';

class GridEidt extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            clicked:false
        }
    }


    handleMouseOver(e){


        if(!this.state.clicked)
        {
            $(this.refs.editPannel).addClass('menu-open');
        }
        
    }

    handleMouseOut(e){
        if(!this.state.clicked)
        {
            $(this.refs.editPannel).removeClass('menu-open');
        }
        
    }

    handleCheckClick(e)
    {


        if(!this.state.clicked)
        {
            $(this.refs.editPannel).addClass('menu-pinned-open');
            this.setState({clicked:true});
        }else{
            $(this.refs.editPannel).removeClass('menu-pinned-open');
            $(this.refs.editPannel).removeClass('menu-open');
            this.setState({clicked:false});
        }
        
    }
    render(){

        return (
                <div ref='editPannel' className="dashboard-edit-menu-container" 
                        onMouseOver={this.handleMouseOver.bind(this)}
                        onMouseOut={this.handleMouseOut.bind(this)}
                        >
                    <div role="button"  title="Edit Dashboard" className="button menu-toggle-button propagate-keydown-event" >
                        <div className="button-icon closed-icon bowtie-edit">
                            <EditIcon color={'white'}/>
                        </div>
                        <div className="button-icon open-icon bowtie-check" 

                        onClick={this.handleCheckClick.bind(this)}>
                            <SaveIcon color={'white'}/>
                        </div>

                    </div>
                    <div className="edit-menu">
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

module.exports= GridEidt;