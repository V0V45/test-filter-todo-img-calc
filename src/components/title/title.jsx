import classes from "./title.module.css";

export default function Title({children, className}) {

    return (
        <h1 className={`${classes.title} ${className}`}>{children}</h1>
    );
}