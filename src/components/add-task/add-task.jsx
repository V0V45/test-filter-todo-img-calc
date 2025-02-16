import classes from "./add-task.module.css";
import addIcon from "../../assets/icons/add.svg";

export default function AddTask({className, onTaskAdd}) {
    return (
        <button onClick={onTaskAdd} className={`${classes.addTask} ${className}`}>
            <img src={addIcon} alt="add task" />
            <p className={classes.addTaskText}>Добавить</p>
        </button>
    )
}