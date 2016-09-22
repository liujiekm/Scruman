import React, { Component, PropTypes } from 'react'
import SingleIndicate from '../../../component/widget/SingleIndicate'


class Home extends Component{
    render(){

            return (
                <div>
                    <SingleIndicate bgColor={'rgb(108,202,201)'} indicate='22' desc='New Users' iconClassName='icon-comments icon-3x'/>

                    <SingleIndicate bgColor={'rgb(255,109,96)'} indicate='140' desc='Sales' iconClassName='icon-tags icon-3x'/>

                    <SingleIndicate bgColor={'rgb(248,211,71)'} indicate='345' desc='New Order' iconClassName='icon-shopping-cart icon-3x'/>

                    <SingleIndicate bgColor={'rgb(87,200,242)'} indicate='34500' desc='Total Profit' iconClassName='icon-inbox icon-3x'/>
                </div>

            )

    }
}

export default Home;