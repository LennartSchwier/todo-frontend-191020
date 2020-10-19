import React from 'react';
import styled from 'styled-components';

export default function Todo({ id, status, description, deleteTodoItemFromList, upgradeTodoItem}) {


    return (
        <StyledTodo>
            <h3>{description}, {status}</h3>
            <button disabled={status === "DONE"} onClick={() => upgradeTodoItem(id, description, status)}>update</button>
            <button onClick={() => deleteTodoItemFromList(id)}>delete</button>
        </StyledTodo>
    );
}

const StyledTodo = styled.section`
    padding: 8px;
    border: 1px solid salmon;
    border-radius: 8px;
`;
