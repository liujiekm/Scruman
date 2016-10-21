import React, {Component, PropTypes} from 'react';

import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';



const itemStyle ={'color':'rgb(117, 117, 117)'}



let SelectableList = MakeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {


    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange(event, index){
      this.setState({
        selectedIndex: index,
      });

      
      //$(event.target).css({'color':'red'});
      this.context.router.push(index);
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange.bind(this)}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

SelectableList.contextTypes = {
  router: React.PropTypes.object.isRequired
}

class ListExampleSelectable extends Component {

    render(){
        return (
            <SelectableList defaultValue={'Home'} >
                <Subheader>  </Subheader>

                <ListItem
                    value={'Home'}
                    primaryText="Widget配置页面"
                    leftIcon={<RemoveRedEye />}
                    style={itemStyle}
                    
                />
                <ListItem
                    value={'Config'}
                    primaryText="自定义表单页面"
                    leftIcon={<PersonAdd />}
                    style={itemStyle}
                />
                <ListItem
                    value={4}
                    primaryText="Nothing"
                    leftIcon={<ContentLink />}
                    style={itemStyle}
                />
                <ListItem
                    value={5}
                    primaryText="Nothing"
                    leftIcon={<ContentCopy />}
                    style={itemStyle}
                />
            </SelectableList>

        );
    }
};








export default ListExampleSelectable;