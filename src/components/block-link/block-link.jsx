import classes from "./block-link.module.css";

export default function BlockLink({className, onClick, isActive, children}) {

    return (
        <a
            className={`${isActive ? classes.active : classes.inActive} ${classes.blockLink} ${className}`}
            onClick={onClick}
            >
                {children}
        </a>
    );
}