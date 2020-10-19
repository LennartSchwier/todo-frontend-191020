import React, {useState} from "react";
import styled from "styled-components/macro";
import Button from "@material-ui/core/Button/Button";

export default function AddTodo({onAdd}) {

    const [description, setDescription] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(description);
        setDescription("");
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <label>
                Add a new todo
                <br/>
                <input type={"text"} value={description} onChange={event => setDescription(event.target.value)}/>
            </label>
            <br/>
            <Button disabled={description.length < 1} variant="contained" color="primary" type={"submit"}>add note</Button>
        </StyledForm>
    );
}

const StyledForm = styled.form`
    margin: 0 24px;
`