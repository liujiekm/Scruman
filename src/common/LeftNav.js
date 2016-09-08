import React, {Component, PropTypes} from 'react';

import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';

import { Router, Route, IndexRoute, Link } from 'react-router';


let SelectableList = MakeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {


    constructor(props)
    {
      super(props);
      this.state={selectedIndex:1};


    }

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange(event, index){
      var self = this;

      
      self.setState({
        selectedIndex: index,
      });

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

class LeftNav extends Component{
  





  render(){


    return(
      <SelectableList defaultValue={3} style={{'backgroundColor':'blue'}}>
      <Subheader>Navigator</Subheader>
      <ListItem
        value={1}
        primaryText="Brendan Lim"
        leftIcon={<ContentSend />}

        rightIcon={<ContentDrafts />}
        nestedItems={[
          <ListItem
            value={2}
            primaryText="Grace Ng"
            leftIcon={<ActionGrade />}
          />,
        ]}
      />
      <ListItem
        value={3}
        primaryText="Kerem Suer"
        leftIcon={<ContentSend />}
      />
      <ListItem
        value={4}
        primaryText="Eric Hoffman"
        leftIcon={<ActionGrade />}
      />
      <ListItem
        value={5}
        primaryText="Raquel Parrado"
        leftIcon={<ActionGrade />}
        
      >
         <Link to='Default' ></Link>
      </ListItem>

     
    </SelectableList>);
  }
    
  
};

export default LeftNav;