import React, { Component, PropTypes } from 'react'

import ReactGridLayout from 'react-grid-layout'



import SingleIndicate from '../../../component/widget/SingleIndicate'

import uuid from 'uuid'


class Home extends Component{
    render(){

            let layout = [
                    {i: 'a', x: 0, y: 0, w: 3, h: 3, static: true},
                    {i: 'b', x: 3, y: 0, w: 3, h: 3},
                    {i: 'c', x: 6, y: 0, w: 3, h: 3},
                    {i: 'd', x: 9, y: 0, w: 3, h: 3}
                ];

            return (
                <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                    <div key={'a'}>
                         <SingleIndicate key={uuid.v1()} layoutGrid={{i: 'a', x: 0, y: 0, w: 2, h: 1, static: true}} bgColor={'rgb(108,202,201)'} indicate='22' desc='New Users' iconClassName='icon-comments icon-3x'/>
                    </div>

                    <div key={'b'}>
                         <SingleIndicate key={uuid.v1()} layoutGrid={{i: 'b', x: 2, y: 0, w: 2, h: 1 }} bgColor={'rgb(255,109,96)'} indicate='140' desc='Sales' iconClassName='icon-tags icon-3x'/>

                    </div>

                    <div key={'c'}>
                         <SingleIndicate key={uuid.v1()} layoutGrid={{i: 'c', x: 4, y: 0, w: 2, h: 1 }} bgColor={'rgb(248,211,71)'} indicate='345' desc='New Order' iconClassName='icon-shopping-cart icon-3x'/>

                    </div>

                    <div key={'d'}>
                         <SingleIndicate key={uuid.v1()} layoutGrid={{i: 'd', x: 6, y: 0, w: 2, h: 1 }} bgColor={'rgb(87,200,242)'} indicate='34500' desc='Total Profit' iconClassName='icon-inbox icon-3x'/>

                    </div>

                </ReactGridLayout>

            )

    }
}

export default Home;