import React from 'react';
import styled from 'styled-components';
import {upgradeTodoItem} from "../service/todo-service";

export default function Todo({ id, status, description, deleteTodoItemFromList, onAdd}) {

    // delete und add function aus argumenten gelöscht
    return (
        <StyledTodo>
            <h3>{description}</h3>
            <button onClick={() => upgradeTodoItem(id, description, status)}>update</button>
            <button onClick={() => deleteTodoItemFromList(id)}>delete</button>
        </StyledTodo>
    );
}

const StyledTodo = styled.section`
    padding: 8px;
    border: 1px solid salmon;
    border-radius: 8px;
`;
