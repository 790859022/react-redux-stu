import React, {Component} from 'react'
import {findDOMNode} from 'react-dom';
import {DragSource, DropTarget} from 'react-dnd'
import {ItemTypes} from './Constants'

const cardSource = {
    beginDrag(props) {
        return {
            id: props.item.id,
            index: props.index,
        }
    }
}
const collectSource = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index
        const hoverIndex = props.index;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return
        }

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        // Determine mouse position
        const clientOffset = monitor.getClientOffset()

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }

        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex)

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex
    },
}
const collectTarget = connect => {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class Item extends Component {
    componentDidMount() {

    }

    render() {
        const {item, isDragging, connectDragSource, connectDropTarget} = this.props;
        const opacity = isDragging ? 0 : 1;
        return (
            connectDragSource(connectDropTarget(<div className="sort-item"
                                                     style={{opacity}}>{item.text}</div>))
        )
    }
}

export default DropTarget(ItemTypes.CARD, cardTarget, collectTarget)(DragSource(ItemTypes.CARD, cardSource, collectSource)(Item))

// export default DragSource(ItemTypes.CARD, cardSource, collectSource)(Item);