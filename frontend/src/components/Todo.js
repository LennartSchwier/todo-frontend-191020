import React from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button/Button";

export default function Todo({ id, status, description, deleteTodoItemFromList, upgradeTodoItem}) {


    return (
        <StyledTodo>
            <StyledHeader>{description}</StyledHeader>
            <Button variant="contained" color="primary" onClick={() => deleteTodoItemFromList(id)}>delete</Button>
            <Button variant="contained" color="primary" disabled={status === "DONE"} onClick={() => upgradeTodoItem(id, description, status)}>update</Button>
        </StyledTodo>
    );
}

const StyledTodo = styled.section`
    padding: 8px;
    border: 1px solid #001064;
    border-radius: 8px;
`;

const StyledHeader = styled.h3`
    color: #001064;
`


