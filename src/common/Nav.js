import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router';

import {Menu,Icon} from 'antd';

import 'antd/dist/antd.min.css'

import '../content/css/main.css'


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Nav extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            current:'mail'

        }
    }

    handleClick(e)
    {
        this.setState({current:e.key});
    }

    render(){

        return (
            
                <Menu onClick={this.handleClick.bind(this)}
                        selectedKeys={[this.state.current]}
                        mode="horizontal">
                    <Menu.Item key="mail">
                        
                        <Link to="Alternative"><Icon type="mail" />导航一</Link>
                    </Menu.Item>
                    <Menu.Item key="app" disabled>
                        <Icon type="appstore" />导航二
                    </Menu.Item>
                    <SubMenu title={<span><Icon type="setting" />导航 - 子菜单</span>}>
                        <MenuItemGroup title="分组1">
                            <Menu.Item key="setting:1">选项1</Menu.Item>
                            <Menu.Item key="setting:2">选项2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="分组2">
                            <Menu.Item key="setting:3">选项3</Menu.Item>
                            <Menu.Item key="setting:4">选项4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <Link to="Second">导航四 - 链接</Link>
                        
                    </Menu.Item>
                </Menu>
                


        )

    }

}

export default Nav