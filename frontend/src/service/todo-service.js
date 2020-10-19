import axios from 'axios';

export const getTodos = () =>
    axios.get('/api/todo').then((response) => response.data);

export const sendTodoItem = (description) => {
    return axios
        .post("/api/todo", {
            description: description,
            status: "OPEN"
        })
        .then(response => (response.data))
}

export const deleteTodoItem = (id) => {
    return axios
        .delete("/api/todo/" + id)
}

export const putTodoItem = (id, description, status) => {
    const newStatus = status === "OPEN" ? "IN_PROGRESS" : "DONE";
    return axios
        .put("api/todo/" + id, {
            description: description,
            id: id,
            status: newStatus
        })
        .then(response => (response.data))
}
