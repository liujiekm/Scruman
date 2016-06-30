import React, { Component, PropTypes } from 'react'

//import '../content/css/main.css'

import { Row, Col } from 'antd'

class Content extends Component {
    render(){
        const {children} = this.props
        return (
            <div>
            
                <Row type="flex">
                    <Col span={24}>
                        
                    {children}
                    </Col>
                </Row>
            </div>
        )
    }

}


Content.propTypes={

    children:PropTypes.element.isRequired

}


export default Content