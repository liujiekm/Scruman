import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainLayout from '../layouts/MainLayout';
import { deepOrange500 } from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';



const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export default class App extends Component {
  render() {
    return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <MainLayout>
                    {this.props.children}
                </MainLayout>
            </MuiThemeProvider>
        );
  }
}

App.propTypes = {



};


