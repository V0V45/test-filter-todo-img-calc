import classes from "./radio-button.module.css";
import radioIconInactive from "../../assets/icons/radiobutton-inactive.svg";
import radioIconActive from "../../assets/icons/radiobutton-active.svg";

export default function RadioButton({className, checked, onClick, children}) {

    return (
        <button className={`${classes.button} ${className}`} onClick={onClick}>
            <img
                className={classes.radioIcon}
                src={checked ? radioIconActive : radioIconInactive}
                alt="radio"
            />
            <p className={classes.buttonText}>{children}</p>
        </button>
    )
}