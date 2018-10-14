import React from 'react';
import {connect} from 'react-redux';
import { findTodoList,createTodo,deleteTodo, updateTodo } from './thunk/thunk';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
            title: "",
        }
        this.userInput = this.userInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    componentWillMount() {
        this.props.fetchTodoList();
    }

    userInput(e) {
        var _state = JSON.parse(JSON.stringify(this.state));
        _state.title = e.target.value;
        this.setState(_state)
    }

    addTodo() {
        var _state = JSON.parse(JSON.stringify(this.state));
        _state.title = '';
        this.setState(_state)
        this.props.addTodo(this.state.title)
    }

    deleteTodo(index) {
        this.props.deleteTodo(index)
    }

    updateTodo(index) {
        const title = this.props.todo[index].title;
        const done = !this.props.todo[index].done;
        this.props.updateTodo(index,title,done);
    }

    render() {
        var list = this.props.todo.map((item,index) => {
            return (
                <div>
                    <input type="button" value="更新" onClick={() => {this.updateTodo(index)}}/>
                    {"・"+item.title}
                    {this.props.todo[index].done ? "完了" : null}
                    <input type="button" value="削除" onClick={() => {this.deleteTodo(index)}}/>
                </div>
            );
        })

        return (
            <div>
                <input value={this.state.title} onChange={(e) => this.userInput(e)} />
                <input type="button" value={"作成"} onClick={this.addTodo}/>
                {list}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (title) => dispatch(createTodo(title)),
        deleteTodo: (index) => dispatch(deleteTodo(index)),
        updateTodo: (index,title,done) => dispatch(updateTodo(index,title,done)),
        fetchTodoList: () => dispatch(findTodoList)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)