import {ADD_TODO,DELETE_TODO,UPDATE_TODO,FETCH_TODO} from "./action";

const initialState = {
    todo:[]
};

export function rootReducer(state=initialState,action) {
    let _state = JSON.parse(JSON.stringify(state));

    switch (action.type){
        /*case ADD_TODO:
            console.log(state)
            _state.todo.push({
                title:action.title,
                done:false});
            return _state;

        case DELETE_TODO:
            _state.todo.splice(action.index,1);
            return  _state;
        case UPDATE_TODO:
            _state.todo[action.index].done = !state.todo[action.index].done
            return _state;
            */
        case FETCH_TODO:
            _state.todo = action.todos
            return _state;
        default:
            return state;
    }
}
