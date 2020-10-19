import React from "react";
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from "./components/AddTodo";

export default function App() {
    const [todos, addTodo, deleteTodoItemFromList, upgradeTodoItem] = useTodos();

    return (
        <Main>
            <h1>Super Kanban Board </h1>
            <AddTodo onAdd={addTodo}/>
            <Board>
                <TodoList
                    todos={todos}
                    deleteTodoItemFromList={deleteTodoItemFromList}
                    onAdd={addTodo}
                    upgradeTodoItem={upgradeTodoItem}
                    checkStatus={"OPEN"}
                />
                <TodoList
                    todos={todos}
                    deleteTodoItemFromList={deleteTodoItemFromList}
                    onAdd={addTodo}
                    upgradeTodoItem={upgradeTodoItem}
                    checkStatus={"IN_PROGRESS"}
                />
                <TodoList
                    todos={todos}
                    deleteTodoItemFromList={deleteTodoItemFromList}
                    onAdd={addTodo}
                    upgradeTodoItem={upgradeTodoItem}
                    checkStatus={"DONE"}
                />
            </Board>
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

const Board = styled.section`
    display: flex;
    justify-content: space-evenly;
`
