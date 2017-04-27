import React,{Component,PropTypes} from 'react'

import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';


const squareTarget={
    drop(props,monitor,component)
    {
        component.handleSquareDrop([props.x,props.y]);
    }
}


function collect(connect,monitor){
    return {

        connectDropTarget:connect.dropTarget(),
        isOver:monitor.isOver()
    }
}

 class Square extends Component{

    handleSquareDrop(position)
    {
        this.props.handleSquareDrop(position);
    }
    render(){

        const {x,y,connectDropTarget,isOver} = this.props;
        const{black} = this.props;
        const fill = black?'black':'white';
        const stroke = black?'white':'black'

        return connectDropTarget(
            <div style={{backgroundColor:fill,color:stroke,width:'100%',height:'100%'}} >
                {this.props.children}
            </div>)

    }


}

Square.propTypes={

    black:PropTypes.bool,
    x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired
}

export default DropTarget(ItemTypes.KNIGHT,squareTarget,collect)(Square);