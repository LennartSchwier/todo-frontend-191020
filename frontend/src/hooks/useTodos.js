import { useEffect, useState } from 'react';
import { getTodos } from '../service/todo-service';

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, []);

    const addTodo = (newTodoItem) => {
        setTodos([...todos, newTodoItem])
    }

    const deleteTodoItemFromFrontend = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return [todos, addTodo, deleteTodoItemFromFrontend];
}
