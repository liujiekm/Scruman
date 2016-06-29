import React, { Component, PropTypes } from 'react'

import MainLayout from '../layouts/MainLayout'

class App extends Component {
    render(){
        const {children} = this.props
        return (
            <MainLayout>
                {children}
            </MainLayout>
        );
    }

}



App.propTypes={

    children:PropTypes.element.isRequird

}


export default App;