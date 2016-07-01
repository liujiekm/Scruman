import React, { Component, PropTypes } from 'react'

//import '../content/css/main.css'

import { Row, Col } from 'antd'

class Content extends Component {
    render(){
        
        return (
            <div>
            
                <Row type="flex">
                    <Col span={24}>
                        
                    {this.props.children}
                    </Col>
                </Row>
            </div>
        )
    }

}


Content.propTypes={

    

}


export default Content