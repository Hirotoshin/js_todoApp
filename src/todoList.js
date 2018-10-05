import {addTodo,deleteTodo,updateTodo} from "./action";
import React from 'react';
import {connect} from 'react-redux'


class TodoList extends React.Component{
    constructor(props){
        super(props);

        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }

    addTodo(){
        this.props.addTodo(this.refs.newText.value);
    }
    deleteTodo(i){
        console.log(i)
        this.props.deleteTodo(i);
    }
    updateTodo(i){
        this.props.updateTodo(i);
    }

    render(){
        return (
            <div>
                <h1>Todoアプリ(仮)</h1>
                <input type="text" ref={"newText"}/>
                <input type="button" value="追加" onClick={this.addTodo} />
                <ul>
                    {this.props.todo.map((todo,i) => {
                        return <li key = {i}>
                            <input type="button" value="x" onClick={()=>{
                                this.deleteTodo(i)}
                            }/>
                            {todo.title}
                            {todo.done ? "done":null}
                            <input type="button" onClick={()=>{
                                this.updateTodo(i)
                            }
                            }/>
                        </li>
                    })}
                </ul>

            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        todo:state.todo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo:(title)=>dispatch(addTodo(title)),
        deleteTodo:(index)=>dispatch(deleteTodo(index)),
        updateTodo:(index)=>dispatch(updateTodo(index))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);