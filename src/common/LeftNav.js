import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

import {List, ListItem, makeSelectable} from 'material-ui/List';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '8px 32px 16px 10px',
    backgroundColor:'rgb(43, 53, 65)',
  }
};

const itemStyle ={'color':'rgb(117, 117, 117)'};

class LeftNav extends Component {


    handleNavigator(event,value){

      this.context.router.push(value);
      
      
      
    }


    handleItemTouch(event,menuItem,index){

      
      //menuItem.props.style={'backgroundColor':'rgb(54,64,76)'};

    }


    render(){

      return (

          <Paper style={style.paper}>
            <Menu onChange={this.handleNavigator.bind(this)} onItemTouchTap={this.handleItemTouch.bind(this)}>
              <MenuItem value={'Home'} primaryText="Preview"  leftIcon={<RemoveRedEye />}  />
              <MenuItem value={'Config'} primaryText="Share" leftIcon={<PersonAdd />}  />
              <MenuItem value={3} primaryText="Get links" leftIcon={<ContentLink />}  />
              
              <MenuItem value={4} primaryText="Make a copy" leftIcon={<ContentCopy />}  />
              <MenuItem value={5} primaryText="Download" leftIcon={<Download />}  />
              
              <MenuItem value={6} primaryText="Remove" leftIcon={<Delete />}  />
            </Menu>
          </Paper>

      );
    }
    
  
  
}


LeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired

}


export default makeSelectable(LeftNav);