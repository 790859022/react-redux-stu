import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'react-addons-update';
import Item from './Item';


// console.log(0x3)
// console.log(0x8)
// let getTransactionId = function () {
//     var d = new Date().getTime(),
//         transactionId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//             var a = (d + Math.random() * 16) % 16;
//             console.log(a, (a | ))
//             var r = (d + Math.random() * 16) % 16 | 0;
//             d = Math.floor(d / 16);
//             return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//         });
//
//     return transactionId;
// };
//
// console.log(getTransactionId())

class List extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.setState({
            data: this.props.data
        })
    }

    moveCard = (dragIndex, hoverIndex) => {
        const {data} = this.state;
        const dragCard = data[dragIndex]
        const newData = update(data, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        })
        this.setState({
            data: newData
        });
    }

    render() {

        const {data} = this.state;
        return (
            <div className="sort-list">
                {data.map((item, index) => <Item key={item.id} index={index} moveCard={this.moveCard} item={item}/>)}
            </div>
        )
    }
}

// export default List;
export default DragDropContext(HTML5Backend)(List);
