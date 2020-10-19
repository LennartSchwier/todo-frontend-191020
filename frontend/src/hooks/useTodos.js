import { useEffect, useState } from 'react';
import {getTodos, sendTodoItem} from '../service/todo-service';

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, []);

    const addTodo = (description) => {
        sendTodoItem(description).then((newTodoItem) => setTodos([...todos, newTodoItem]))
    }

    // TODO: umbauen wie addtodo()
    const deleteTodoItemFromFrontend = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // TODO: eigene update function schreiben die "setTodos([...todos, newTodoItem])" beinhaltet

    return [todos, addTodo, deleteTodoItemFromFrontend];
}
