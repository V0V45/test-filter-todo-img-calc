import classes from "./task.module.css";
import checkboxActive from "../../assets/icons/checkbox-active.svg";
import checkboxInactive from "../../assets/icons/checkbox-inactive.svg";
import trashIcon from "../../assets/icons/delete.svg";
import { useState } from "react";

export default function Task({
    children,
    className,
    id,
    isDone,
    onTaskChange,
    onTaskDelete,
    onTaskToggle
}) {
    const [taskText, setTaskText] = useState(children);

    function handleTaskChange(event) {
        const newTaskText = event.target.value;
        setTaskText(newTaskText);
        onTaskChange(id, newTaskText);
    }

    return (
        <div className={`${classes.task} ${isDone ? classes.isDone : classes.isNotDone} ${className}`}>
            <button className={classes.isDoneButton} onClick={() => onTaskToggle(id)} >
                <img src={isDone ? checkboxActive : checkboxInactive} alt={isDone ? "done" : "not done"} />
            </button>
            <input
                className={`${classes.taskText} ${isDone && classes.isDoneText}`}
                value={taskText}
                onChange={handleTaskChange}
            />
            <button className={classes.deleteButton} onClick={() => onTaskDelete(id)}>
                <img src={trashIcon} alt="delete" />
            </button>
        </div>
    );
}