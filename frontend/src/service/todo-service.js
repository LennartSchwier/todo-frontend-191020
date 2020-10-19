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

export const deleteTodoItem = (id, deleteTodoItemFromFrontend) => {
    axios
        .delete("/api/todo/" + id)
        .then(() => deleteTodoItemFromFrontend(id))
        .catch(error => console.log(error))
}

export const upgradeTodoItem = (id, description, status, deleteTodoItemFromFrontend, onAdd) => {
    const newStatus = status === "OPEN" ? "IN_PROGRESS" : "DONE";
    axios
        .put("api/todo/" + id, {
            description: description,
            id: id,
            status: newStatus
        })
        .then(response => onAdd(response.data))
        .then(() => deleteTodoItemFromFrontend(id))
        .catch(error => console.log(error))

}