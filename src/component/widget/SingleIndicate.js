import React, { Component, PropTypes } from 'react';


import uuid from 'uuid'

const style={
  height: 75,
  width: 250,

  textAlign: 'center',
  display: 'inline-block',
  position:'relative',

  backgroundColor:'white',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
}


 class SingleIndicate extends Component{
     constructor(props){
         super(props);
        //  this.state={
        //      bgColor:props.bgColor,
        //      iconClassName:props.iconClassName,
        //      indicate:props.indicate,
        //      desc:props.desc
        //  }

     }

     componentDidMount(){

     }


     componentWillReceiveProps(nextProps)
     {
        //  this.setState({
        //      bgColor:nextProps.bgColor,
        //      iconClassName:nextProps.iconClassName,
        //      indicate:nextProps.indicate,
        //      desc:nextProps.desc
        //  });
     }

    render(){


        return (
            <div style={style} >
                <div style={{'backgroundColor':this.props.data.bgColor,'width':'100px','height':'100%','float':'left','color':'white','paddingTop': '15px'}}>
                    <i className={this.props.data.iconClassName}></i>
                </div>
                <div className='wgt-indicate-right'>
                    <div style={{'fontSize': '20px','textAlign':'center','width':'100%','height':'50%','paddingTop': '15px','color':'rgb(181,188,204)'}}>
                        {this.props.data.indicate}
                    </div>
                    <div style={{'fontSize': '10px','textAlign':'center','width':'100%','height':'50%','color':'rgb(181,188,204)'}}>
                        {this.props.data.desc}
                    </div>
                </div>
            
            
            </div>
        );
    }


}

SingleIndicate.propTypes={
    
    data:PropTypes.object.isRequired

    
}



module.exports= SingleIndicate;