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



const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '8px 32px 16px 10px',
    backgroundColor:'rgb(43, 53, 65)',
  }
};

class LeftNav extends Component {


    handleNavigator(event,value){

      this.context.router.push(value);
      
    }

    render(){

      return (

          <Paper style={style.paper}>
            <Menu onChange={this.handleNavigator.bind(this)}>
              <MenuItem value={'Default'} primaryText="Preview" leftIcon={<RemoveRedEye />}  style={{'color':'rgb(117, 117, 117)'}}/>
              <MenuItem value={2} primaryText="Share" leftIcon={<PersonAdd />} style={{'color':'rgb(117, 117, 117)'}} />
              <MenuItem value={3} primaryText="Get links" leftIcon={<ContentLink />} style={{'color':'rgb(117, 117, 117)'}} />
              
              <MenuItem value={4} primaryText="Make a copy" leftIcon={<ContentCopy />} style={{'color':'rgb(117, 117, 117)'}} />
              <MenuItem value={5} primaryText="Download" leftIcon={<Download />} style={{'color':'rgb(117, 117, 117)'}} />
              
              <MenuItem value={6} primaryText="Remove" leftIcon={<Delete />} style={{'color':'rgb(117, 117, 117)'}} />
            </Menu>
          </Paper>

      );
    }
    
  
  
}


LeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired

}


export default LeftNav;