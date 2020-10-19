import axios from 'axios';

export const getTodos = () =>
    axios.get('/api/todo').then((response) => response.data);

export const sendTodoItem = (description, onAdd) => {
    axios
        .post("/api/todo", {
            description: description,
            status: "OPEN"
        })
        .then(response => onAdd(response.data))
        .catch(error => console.log(error))
}

export const deleteTodoItem = (id, deleteTodoItemFromFrontend) => {
    axios
        .delete("/api/todo/" + id)
        .then(() => deleteTodoItemFromFrontend(id))
        .catch(error => console.log(error))
}
