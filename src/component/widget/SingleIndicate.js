import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';



const style={

  height: 75,
  width: 250,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
  position:'relative',
  cursor: 'pointer'
}


 class SingleIndicate extends Component{
     constructor(props){
         super(props);
     }

    render(){

        return (
            <Paper style={style} zDepth={2} >
                <div style={{'backgroundColor':this.props.bgColor,'width':'100px','height':'100%','float':'left','color':'white','paddingTop': '15px'}}>
                    <i className={this.props.iconClassName}></i>
                </div>
                <div className='wgt-indicate-right'>
                    <div style={{'fontSize': '20px','textAlign':'center','width':'100%','height':'50%','paddingTop': '15px','color':'rgb(181,188,204)'}}>
                        {this.props.indicate}
                    </div>
                    <div style={{'fontSize': '10px','textAlign':'center','width':'100%','height':'50%','color':'rgb(181,188,204)'}}>
                        {this.props.desc}
                    </div>
                </div>
            
            
            </Paper>
        );
    }


}

SingleIndicate.propTypes={
    
    indicate:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    iconClassName:PropTypes.string.isRequired
    
}



export default SingleIndicate;