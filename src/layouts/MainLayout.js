import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import { Row, Col } from 'antd'

import Nav from '../common/Nav'

import Content from '../common/Content'

class MainLayout extends Component {

    

    render(){

        

        return (
            <div>
                <Nav />

                <Content>
                   {this.props.children}
                </Content>
                
            </div>
        )

    }

}


MainLayout.propTypes={
    
}

export default MainLayout