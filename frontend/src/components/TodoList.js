import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

export default function TodoList({ todos, deleteTodoItemFromList, onAdd }) {
    return (
        <StyledList>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Todo
                        id={todo.id}
                        status={todo.status}
                        description={todo.description}
                        deleteTodoItemFromList={deleteTodoItemFromList}
                        onAdd={onAdd}
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