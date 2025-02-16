import classes from "./calc-button.module.css";
import removeSymbolIcon from "../../assets/icons/remove-symbol.svg";
import divideIcon from "../../assets/icons/divide.svg";
import multiplyIcon from "../../assets/icons/multiply.svg";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";
import equalsIcon from "../../assets/icons/equals.svg";

export default function CalcButton({className, onClick, type, children}) {

    return (
        <button
            className={`${classes.button} ${type === "text" && classes.textContainer} ${className}`}
            onClick={onClick}
        >
            {type === "remove" && <img src={removeSymbolIcon} alt="remove symbol" />}
            {type === "divide" && <img src={divideIcon} alt="divide" />}
            {type === "multiply" && <img src={multiplyIcon} alt="multiply" />}
            {type === "minus" && <img src={minusIcon} alt="minus" />}
            {type === "plus" && <img src={plusIcon} alt="plus" />}
            {type === "equals" && <img src={equalsIcon} alt="equals" />}
            {type === "text" && <p className={classes.buttonText}>{children}</p>}
        </button>
    );
}