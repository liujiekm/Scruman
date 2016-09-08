import React, { Component, PropTypes } from 'react'





class Content extends Component {
    render(){
        return (
            <div className='content'>    

                        
                    {this.props.children}

            </div>
        )
    }

}


Content.propTypes={

    

}


export default Content