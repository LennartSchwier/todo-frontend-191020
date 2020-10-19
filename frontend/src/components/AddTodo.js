import React, {useState} from "react";

export default function AddTodo({onAdd}) {

    const [description, setDescription] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(description);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add a new todo
                <input type={"text"} value={description} onChange={event => setDescription(event.target.value)}/>
            </label>
            <button type={"submit"}>add note</button>
        </form>
    );
}