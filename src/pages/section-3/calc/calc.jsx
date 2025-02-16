import classes from "./calc.module.css";
import CalcButton from "../../../components/calc-button/calc-button";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Calc() {
    const { expression = "" } = useParams();
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    useEffect(() => {
        setInput(expression);
    }, [expression]);

    function handleInputChange(event) {
        const value = event.target.value;
        if (/^[0-9+\-*/.]+$/.test(value) || event.nativeEvent.inputType === "deleteContentBackward") {
            setInput(value);
        }
    }

    function handleButtonClick(value) {
        const newInput = input + value;
        setInput(newInput);
        navigate(`/section-3/calc/${encodeURIComponent(newInput)}`);
    }

    function handleClearClick() {
        setInput("");
    }

    function handleRemoveSymbolClick() {
        setInput(input.slice(0, -1));
    }

    function handleEqualsClick() {
        try {
            const result = eval(input);
            setInput(result.toString());
            navigate(`/section-3/calc/${encodeURIComponent(result)}`);
        } catch (error) {
            console.error(error);
            setInput("Ошибка")
            navigate(`/section-3/calc/error`);
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleEqualsClick();
        }
    }

    return (
        <div className={classes.calcContainer}>
            <input
                className={classes.input}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <CalcButton type="text" className={classes.clear} onClick={handleClearClick}>C</CalcButton>
            <CalcButton type="remove" className={classes.removeSymbol} onClick={handleRemoveSymbolClick} />
            <CalcButton type="text" className={classes.zero} onClick={() => handleButtonClick("0")}>0</CalcButton>
            <CalcButton type="text" className={classes.comma} onClick={() => handleButtonClick(".")}>,</CalcButton>
            <CalcButton type="divide" className={classes.divide} onClick={() => handleButtonClick("/")} />
            <CalcButton type="multiply" className={classes.multiply} onClick={() => handleButtonClick("*")} />
            <CalcButton type="text" className={classes.seven} onClick={() => handleButtonClick("7")}>7</CalcButton>
            <CalcButton type="text" className={classes.eight} onClick={() => handleButtonClick("8")}>8</CalcButton>
            <CalcButton type="text" className={classes.nine} onClick={() => handleButtonClick("9")}>9</CalcButton>
            <CalcButton type="minus" className={classes.minus} onClick={() => handleButtonClick("-")} />
            <CalcButton type="text" className={classes.four} onClick={() => handleButtonClick("4")}>4</CalcButton>
            <CalcButton type="text" className={classes.five} onClick={() => handleButtonClick("5")}>5</CalcButton>
            <CalcButton type="text" className={classes.six} onClick={() => handleButtonClick("6")}>6</CalcButton>
            <CalcButton type="plus" className={classes.plus} onClick={() => handleButtonClick("+")} />
            <CalcButton type="text" className={classes.one} onClick={() => handleButtonClick("1")}>1</CalcButton>
            <CalcButton type="text" className={classes.two} onClick={() => handleButtonClick("2")}>2</CalcButton>
            <CalcButton type="text" className={classes.three} onClick={() => handleButtonClick("3")}>3</CalcButton>
            <CalcButton type="equals" className={classes.equals} onClick={handleEqualsClick} />
        </div>
    );
}