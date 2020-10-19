import React from 'react';
import styled from 'styled-components';
import {deleteTodoItem} from "../service/todo-service";

export default function Todo({ id, status, description, deleteTodoItemFromFrontend}) {
    return (
        <StyledTodo>
            <h3>{description}</h3>
            <button>update</button>
            <button onClick={() => deleteTodoItem(id, deleteTodoItemFromFrontend)}>delete</button>
        </StyledTodo>
    );
}

const StyledTodo = styled.section`
    padding: 8px;
    border: 1px solid salmon;
    border-radius: 8px;
`;
