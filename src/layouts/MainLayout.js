import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import { Row, Col } from 'antd'

import Nav from '../common/Nav'

import Content from '../common/Content'

class MainLayout extends Component {

    

    render(){

        const {children} = this.props

        return (
            <div>
                <Nav />

                <Content>
                    {children}
                </Content>
                
            </div>
        )

    }

}


MainLayout.propTypes={
    children: PropTypes.element.isRequired
}

export default MainLayout