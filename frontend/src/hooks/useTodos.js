import { useEffect, useState } from 'react';
import {deleteTodoItem, getTodos, sendTodoItem} from '../service/todo-service';

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, []);

    const addTodo = (description) => {
        sendTodoItem(description).then((newTodoItem) => setTodos([...todos, newTodoItem]))
    }

    const deleteTodoItemFromList = (id) => {
        deleteTodoItem(id).then(() => setTodos(todos.filter(todo => todo.id !== id)));
    }

    // TODO: eigene update function schreiben die "setTodos([...todos, newTodoItem])" beinhaltet

    return [todos, addTodo, deleteTodoItemFromList];
}
