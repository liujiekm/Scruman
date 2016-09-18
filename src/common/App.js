import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MainLayout from '../layouts/MainLayout';
import { deepOrange500,redA200,grey500,grey900,grey50,grey600,white,darkBlack,cyan500,
        cyan700,grey400,grey100,grey300
 } from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {darken, fade, emphasize, lighten} from 'material-ui/utils/colorManipulator';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    textColor:grey500,
    shadowColor: grey50,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),

    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    
    accent2Color: grey100,
    accent3Color: grey500,
    
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300
    
 
  },
  menu: {
    backgroundColor: white,
    containerBackgroundColor: white,
  },
  menuItem: {
    dataHeight: 48,
    height: 52,
    hoverColor: fade(redA200, 0.035),
    selectedTextColor: redA200,
    
    rightIconDesktopFill: redA200,
  }
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


