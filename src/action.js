export const FETCH_TODO = 'fetch_todo';

export function fetchTodo(todos) {
    return {
        type:FETCH_TODO,
        todos:todos
    }
}