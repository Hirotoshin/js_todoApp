import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from "./action";

const initialState = {
    todo:[]
};

export function rootReducer(state=initialState,action) {
    let _state = JSON.parse(JSON.stringify(state));

    switch (action.type){
        case ADD_TODO:
            console.log(state)
            _state.todo.push({
                title:action.title,
                done:false});
            return _state;

        case DELETE_TODO:
            return{
                todo:state.todo.splice(action.index,1)
            };
        case UPDATE_TODO:
            state.todo[action.index].done = !state.todo[action.index].done
            return{
                todo:state.todo
            };
        default:
            return state;
    }
}
