import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';



const style={

     height: 75,
  width: 250,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
  position:'relative'
}


 class SingleIndicate extends Component{
     constructor(props){
         super(props);
     }

     getDefaultProps(){
         return {
             bgColor:'blue'
         }
     }
    render(){

        return (
            <Paper style={style} zDepth={2} >
                <div style={{'backgroundColor':this.props.bgColor,'width':'100px','height':'100%','float':'left'}}>

                </div>
                <div className='wgt-indicate-right'>
                
                </div>
            
            
            </Paper>
        );
    }


}

export default SingleIndicate;