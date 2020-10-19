import React from "react";
import styled from 'styled-components/macro';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from "./components/AddTodo";
import Button from "@material-ui/core/Button/Button";

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
        color: #001064;
    }
`;

const Board = styled.section`
    display: grid;
    grid: 150px / 30% 30% 30%;
    justify-content: space-evenly;
`
