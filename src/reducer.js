import {FETCH_TODO} from './action'

const initialState = {
    todo:[]
}

export function rootReducer(state=initialState, action) {
    let _state = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case FETCH_TODO:
            _state.todo = action.todos;
            return _state;
        default:
            return _state;
    }
}