import React,{Component,PropTypes} from 'react'
import { render, findDOMNode } from 'react-dom'


import options from "../../content/data/option"
import echarts from 'echarts'



var intervalRef;

class EchartWidget extends Component{
    componentDidMount() {

        const chartDom = this.refs.chart;
        const chart = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);
        chart.setOption(options.homeLineOption);
        this.getChartData(chart);

        intervalRef=setInterval(function () {
            this.getChartData(chart)
        }.bind(this), 10000);
    }

    getChartData (chart) {


    }
    componentWillUnmount () {
        clearInterval(intervalRef);
        echarts.dispose(this.refs.chart)
    }
    render() {
        return (
            <div className='chart-container'>
                <div ref="chart" className="chart-size" />
            </div>
        );
    }


}

module.exports = EchartWidget;

