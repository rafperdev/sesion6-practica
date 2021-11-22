import React, { useRef, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

export function App() {
    const taskRef = useRef();
    const [listas, setListas] = useState([{ id: 1, task: "Tarea 1", completed: false }]);

    const handledTaskAdd = () => {
        const task = taskRef.current.value;

        if (task === "") return;

        setListas((prev) => [...prev, { id: uuidv4(), task, completed: false }])
        taskRef.current.value = "";
    }

    return <Fragment>

        <input ref={taskRef} type="text" placeholder="Nueva tarea" />
        <button onClick={handledTaskAdd}>+</button>
        <button>-</button>
        <TodoList listas={listas} />
    </Fragment>

}