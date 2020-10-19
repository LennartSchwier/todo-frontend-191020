import React, {useState} from "react";
import {sendTodoItem} from "../service/todo-service";

export default function AddTodo({onAdd}) {

    const [description, setDescription] = useState("");

    return (
        <form>
            <label>Add a new todo</label>
            <input type={"text"} onChange={event => setDescription(event.target.value)}/>
            <button type={"button"} onClick={() => sendTodoItem(description, onAdd)}>add note</button>
        </form>
    );
}