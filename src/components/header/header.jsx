import classes from "./header.module.css";
import headerIcon from "../../assets/icons/header-icon.svg";
import { NavLink } from "react-router";

export default function Header({className}) {

    return (
        <header className={`${classes.header} ${className}`}>
            <img className={classes.headerIcon} src={headerIcon} alt="robot" />
            <NavLink className={`link ${classes.headerLink}`} to="/" end>Раздел 1</NavLink>
            <NavLink className={`link ${classes.headerLink}`} to="/section-2" end>Раздел 2</NavLink>
            <NavLink className={`link ${classes.headerLink}`} to="/section-3">Раздел 3</NavLink>
        </header>
    );
}