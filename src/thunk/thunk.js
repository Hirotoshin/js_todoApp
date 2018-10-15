import {addTodo,deleteTodo,updateTodo,fetchTodo} from "../action";

const host = "http://localhost:3001";

export const findTodoList = (dispatch,getState) =>{
    const method = "GET";
    const headers = {
        "Content-Type":"application/json"
    };
    const url = host+"/todo/read";
    fetch(url,{method,headers})
        .then((res) => {
            res.json().then((data) =>{
                console.log(data);
                dispatch(fetchTodo(data))
            })
    }).catch((error) => {
        console.log(error)
    })
}

export const createTodoList = (title) => (dispatch,getState) =>{
    const method = "POST";
    const headers = {
        "COntent-Type":"application/json"
    };
    const body = JSON.stringify({
        title:title
    });
    const url = host+"/todo/create";
    fetch(url,{method,headers,body})
        .then((res) => {
            findTodoList(dispatch,getState)
        })
        .catch((error) => {
            console.log(error)
        })
}

export const deleteTodoList = (index) => (dispatch,getState) =>{
    const method = "POST";
    const headers = {
        "COntent-Type":"application/json"
    };
    const body = JSON.stringify({
        index:index
    });
    const url = host+"/todo/delete";
    fetch(url,{method,headers,body})
        .then((res) => {
            findTodoList(dispatch,getState)
        })
        .catch((error) => {
            console.log(error)
        })
}

export const updateTodoList = (title,done,index) => (dispatch,getState) => {

    const method = "POST";
    const headers = {
        "COntent-Type":"application/json"
    };
    const body = JSON.stringify({
        title:title,
        done:done,
        index:index
    });
    const url = host+"/todo/update";
    fetch(url,{method,headers,body})
        .then((res) => {
            findTodoList(dispatch,getState)
        })
        .catch((error) => {
            console.log(error)
        })
}
