import React from "react";
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from "./components/AddTodo";

export default function App() {
    const [todos, addTodo, deleteTodoItemFromFrontend] = useTodos();

    return (
        <Main>
            <h1>Super Kanban Board </h1>
            <AddTodo onAdd={addTodo}/>
            <TodoList todos={todos} deleteTodoItemFromFrontend={deleteTodoItemFromFrontend} onAdd={addTodo}/>
        </Main>
    );
}

const Main = styled.main`
    height: 100vh;
    padding: 8px;

    h1 {
        color: hotpink;
    }
`;
