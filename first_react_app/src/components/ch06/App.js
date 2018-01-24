import React, {Component} from 'react';


const addNewProps = (WrappedComponent, newProps) => {
    return class WrappingComponent extends Component {
        render() {
            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}
const removeProps = (WrappedComponent, prop) => {
    return class WrappingComponent extends Component {

        render() {
            let {...newProps} = this.props;
            delete newProps[prop]
            return <WrappedComponent {...newProps} />
        }
    }
}

const refsHOC = (WrappedComponent) => {
    return class HOCComponent extends Component {
        linkRef = (node) => {
            this._root = node
        }

        render() {
            const props = {...this.props, ref: this.linkRef};
            return <WrappedComponent {...props}/>;
        }
    }
}


class Person extends Component {
    render() {
        const {name, age} = this.props;
        return (
            <div>
                <h3>姓名：{name}</h3>
                <p>年龄：{age}</p>
            </div>
        )
    }
}

const loggedinUser = 'F G';

class AddUserProp extends Component {
    render() {
        const user = loggedinUser;
        return this.props.children(user);
    }
}


const Jack = addNewProps(Person, {name: 'jack', age: '22'});
const Tom = removeProps(Person, 'name')


class App extends Component {
    render() {
        return (
            <div>
                <Jack/>
                <Tom name="Tom" age="19"/>
                <AddUserProp>
                    {(user)=><div>{user}</div>}
                </AddUserProp>
            </div>
        )

    }
}

export default App;