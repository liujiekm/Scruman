import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';

import uuid from 'uuid'

const style={
  height: 75,
  width: 250,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
  position:'relative',
  cursor: 'pointer',
  backgroundColor:'white',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
}


 class SingleIndicate extends Component{
     constructor(props){
         super(props);
     }

     componentDidMount(){
         
     }

    render(){

        return (
            <div style={style} >
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
            
            
            </div>
        );
    }


}

SingleIndicate.propTypes={
    
    indicate:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    iconClassName:PropTypes.string.isRequired
    
}



export default SingleIndicate;