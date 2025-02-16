import Header from "../../components/header/header";
import RadioButton from "../../components/radio-button/radio-button";
import Title from "../../components/title/title";
import classes from "./section-1.module.css";

export default function Section1({color, setColor, textAreaValue, setTextAreaValue}) {
  return (
    <>
      <Header />
      <div className={classes.colorChooser}>
        <Title className={classes.title}>Выбор цвета</Title>
        <RadioButton 
          className={classes.radioButton}
          onClick={() => setColor("red")}
          checked={color === "red"}>
            Красный
        </RadioButton>
        <RadioButton
          className={classes.radioButton}
          onClick={() => setColor("green")}
          checked={color === "green"}>
            Зеленый
        </RadioButton>
        <RadioButton
        className={classes.radioButton}
        onClick={() => setColor("blue")}
        checked={color === "blue"}>
          Синий
      </RadioButton>
      </div>
      <div className={classes.textField}>
        <Title className={classes.title}>Текстовое поле</Title>
        <textarea
          className={classes.textarea}
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
          placeholder="Введите текст, который будет отображаться в разделе 3 подменю 3"></textarea>
      </div>
    </>
  );
}