import classes from "./block-2.module.css";
import Title from "../../../components/title/title";
import Task from "../../../components/task/task";
import AddTask from "../../../components/add-task/add-task";

export default function Block2({
    className,
    active,
    tasksData,
    onTaskChange,
    onTaskAdd,
    onTaskDelete,
    onTaskToggle
}) {

    return (
        <div className={`${active ? `${classes.container} ${className}` : classes.hidden}`}>
            <Title className={classes.title}>Список задач</Title>
            {tasksData.map((task) => {
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                        isDone={task.isDone}
                        onTaskChange={onTaskChange}
                        onTaskDelete={onTaskDelete}
                        onTaskToggle={onTaskToggle}
                    >
                        {task.task}
                    </Task>
                );
            })}
            <AddTask className={classes.addTask} onTaskAdd={onTaskAdd} />
        </div>
    );
}