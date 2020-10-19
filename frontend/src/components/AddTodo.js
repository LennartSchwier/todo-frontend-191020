import React, {useState} from "react";
import styled from "styled-components/macro";

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
            <button type={"submit"}>add note</button>
        </StyledForm>
    );
}

const StyledForm = styled.form`
    margin: 0 24px;
`