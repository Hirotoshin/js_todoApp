

export const ADD_TODO = 'add_todo'
export const DELETE_TODO = 'delete_todo'
export const UPDATE_TODO = 'update_todo'

export function addTodo(title) {
    return{
        type:ADD_TODO,
        title
    };
}

export function deleteTodo(index) {
    return{
        type:DELETE_TODO,
        index
    };
}

export function updateTodo(index) {
    return{
        type:UPDATE_TODO,
        index
    };
}