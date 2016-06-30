import React, { Component, PropTypes } from 'react'

import MainLayout from '../layouts/MainLayout'

class App extends Component {
    render(){
        
        return (
            <MainLayout>
                {this.props.children}
            </MainLayout>
        );
    }

}



App.propTypes={

    

}


export default App;