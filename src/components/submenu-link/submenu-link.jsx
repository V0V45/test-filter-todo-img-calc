import classes from "./submenu-link.module.css";

export default function SubmenuLink({className, onClick, isActive, children}) {

    return (
        <a
            className={`${isActive ? classes.active : classes.inActive} ${classes.submenuLink} ${className}`}
            onClick={onClick}
            >
                {children}
        </a>
    );
}