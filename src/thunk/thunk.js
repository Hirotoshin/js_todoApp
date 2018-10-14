import { fetchTodo } from '../action';

const host = "http://localhost:3001";

export const findTodoList = (dispatch, getState) => {
    const method = "GET";
    const headers = {
        "Content-Type": "application/json"
    };
    const url = host+"/todo/read";
    fetch(
        url,
        {method, headers},
    ).then(res => {
        res.json().then((data) => {
            dispatch(fetchTodo(data))
        })
    }).catch(err => {
        console.log(err);
    })
}

export const createTodo = title => (dispatch, getState) => {
    const method = "POST";
    const headers = {
        "Content-Type":"application/json"
    };
    const url = host+"/todo/create";
    const body = JSON.stringify({
        title:title
    });
    fetch(
        url,
        {method,headers,body},
    ).then(res => {
        findTodoList(dispatch, getState);
    }).catch(err => {
        console.log(err);
    });
}

export const deleteTodo = index => (dispatch, getState) => {
    const method = "POST";
    const headers = {
        "Content-Type":"application/json"
    };
    const url = host+"/todo/delete";
    const body = JSON.stringify({
        index:index
    });
    fetch(
        url,
        {method,headers,body},
    ).then(res => {
        findTodoList(dispatch, getState);
    }).catch(err => {
        console.log(err);
    });
}

export const updateTodo = (index,title,done) => (dispatch, getState) => {
    const method = "POST";
    const headers = {
        "Content-Type":"application/json"
    };
    const url = host+"/todo/update";
    const body = JSON.stringify({
        index,
        title,
        done,
    });
    fetch(
        url,
        {method,headers,body},
    ).then(res => {
        findTodoList(dispatch, getState);
    }).catch(err => {
        console.log(err);
    });
}