import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ listas }) {
    return <ul>
        {listas.map((lista) => {
            return <TodoItem key={lista.id} lista={lista} />
        }
        )}
    </ul>;
}