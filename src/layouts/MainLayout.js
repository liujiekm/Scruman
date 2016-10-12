import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'


import TopNav from '../common/TopNav'

import Content from '../common/Content'

import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'

import LeftNav from '../common/LeftNav'

import ListExampleSelectable from '../common/SelectableList'




export default class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    render(){
      

        return (
            <div className='app-root'>
                <div className='top-nav-area'>
                    <TopNav />
                </div>

                <div className='left-nav-area'>
                    <ListExampleSelectable />
                </div>
                    
                <Content>              
                    {this.props.children}
                </Content>

            </div>
        )

    }

}


MainLayout.propTypes={
    
}

