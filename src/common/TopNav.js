import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'

import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import FileFolder from 'material-ui/svg-icons/file/folder'
import Badge from 'material-ui/Badge'
import FlatButton from 'material-ui/FlatButton';



import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'

import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';



import '../lib/Font-Awesome/css/font-awesome.min.css'

import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
} from 'material-ui/styles/colors';


import UserControl from './UserControl'


const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

export default class TopNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  
  render() {
    return (
      <Toolbar style={{'backgroundColor':'white'}}>
        <ToolbarGroup firstChild={true}>
        

            <FlatButton
              label="Scruman Hub"
              href="#"
              secondary={true}
              icon={<i className="icon-time icon-2x"></i>}
            />
        </ToolbarGroup>


        <ToolbarGroup>
         
            <div>

                <Badge style={{'marginTop':'-15px'}}
                    badgeContent={<IconButton tooltip="Backup"><UploadIcon /></IconButton>}
                    badgeStyle={{top: 8, right: 8}}

                    
                  >
                    <FolderIcon />
                </Badge>




                <Badge style={{'marginTop':'-15px'}}
                  badgeContent={10}
                  secondary={true}
                  badgeStyle={{top: 24, right: 24,'width':'20px','height':'20px'}}
                  >
                  <IconButton tooltip="Notifications">
                    <NotificationsIcon />
                  </IconButton>
              </Badge>
            </div>
       

        </ToolbarGroup>
        
        <ToolbarGroup lastChild={true}>

          
          <TextField style={{'marginTop': '-15px','width':'150px'}} 
              floatingLabelText="Search"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />

            
          <Avatar src="/src/content/img/user.jpg"  style={{marginTop:'7px'}}></Avatar>
          
          <UserControl />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}