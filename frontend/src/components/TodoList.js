import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
import {mapStatus} from "../utils/todoUtils";

export default function TodoList({todos, deleteTodoItemFromList, onAdd, upgradeTodoItem, checkStatus}) {

    return (
        <StyledList>
            <h2>{mapStatus(checkStatus)}</h2>
            {todos
                .filter(todo => todo.status === checkStatus)
                .map((todo) => (
                <li key={todo.id}>
                    <Todo
                        id={todo.id}
                        status={todo.status}
                        description={todo.description}
                        deleteTodoItemFromList={deleteTodoItemFromList}
                        onAdd={onAdd}
                        upgradeTodoItem={upgradeTodoItem}
                    />
                </li>
            ))}
        </StyledList>
    );
}

const StyledList = styled.ul`
    list-style: none;
    padding: 0;

    li + li {
        margin-top: 12px;
    }
`;
