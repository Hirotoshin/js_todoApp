import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './action'

const initialState = {
    todo:[]
}

export function rootReducer(state=initialState, action) {
    let _state = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case ADD_TODO:
            _state.todo.push({
                title: action.title,
                done: false,
            });
            return _state;
        case DELETE_TODO:
            _state.todo.splice(action.index, 1);
            return _state;
        case UPDATE_TODO:
            _state.todo[action.index].done = !_state.todo[action.index].done 
            return _state
        default:
            return _state;
    }
}