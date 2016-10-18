import React,{Component,PropTypes} from 'react'
import { render, findDOMNode } from 'react-dom'


import options from "../../content/data/option"
import echarts from 'echarts'



class EchartWidgetNormal extends Component {

    componentDidMount(){
        const chartDom = this.refs.chart;
        const chart = echarts.getInstanceByDom(chartDom) || echarts.init(chartDom);


        options.admissionDischargeOption.series[0].data=this.props.data[0];
        options.admissionDischargeOption.series[1].data=this.props.data[1];
        
        chart.setOption(options.admissionDischargeOption);
        //this.getChartData(chart);
    }

    getChartData(chart){
        
        
        
    }
    
    
    render(){
        
        
        return (
            
            
                    <div className="chart-container">

                        <div ref="chart" className="detail-chart"></div>
                    </div>
              
        )
    }
    
}


module.exports = EchartWidgetNormal