import Header from "../../components/header/header";
import SubmenuLink from "../../components/submenu-link/submenu-link";
import Title from "../../components/title/title";
import classes from "./section-3.module.css";
import { Outlet, useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";

export default function Section3({
  color,
  textAreaValue,
  selectedCategory,
  filteredData,
  tasksData
}) {
  const [activeSubmenu, setActiveSubmenu] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/calc")) {
      setActiveSubmenu(2);
    }
  }, [location.pathname]);

  function handleSubmenuClick(submenuNumber) {
    setActiveSubmenu(submenuNumber);
    if (submenuNumber === 2) {
      navigate("/section-3/calc");
    } else {
      navigate("/section-3");
    }
  }

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={`${classes[color]} ${classes.leftMenu}`}>
          <SubmenuLink onClick={() => handleSubmenuClick(1)} isActive={activeSubmenu === 1}>Подменю 1</SubmenuLink>
          <SubmenuLink onClick={() => handleSubmenuClick(2)} isActive={activeSubmenu === 2}>Подменю 2</SubmenuLink>
          <SubmenuLink onClick={() => handleSubmenuClick(3)} isActive={activeSubmenu === 3}>Подменю 3</SubmenuLink>
        </div>
        <div className={activeSubmenu === 1 ? classes.submenu : classes.hidden}>
          <Title>Подменю 1</Title>
          <p className={`${classes.text} ${classes.mt}`}>Выбранный селектор в разделе 2, блоке 1: {selectedCategory === "all" ? "все" : selectedCategory}</p>
          <p className={`${classes.text} ${classes.mt}`}>Незакрытые задачи в разделе 2, блоке 2:</p>
          {tasksData.filter((task) => task.isDone === false).length > 0 ? (
            tasksData.filter((task) => task.isDone === false).map((task) => {
              return (
                <p key={task.id} className={classes.text}>{task.task}</p>
              );
            }
          )) : (
            <p className={classes.text}>отсутствуют</p>
          )}
        </div>
        <div className={activeSubmenu === 2 ? classes.submenu : classes.hidden}>
          <Title className={classes.submenuTitle}>Подменю 2: калькулятор</Title>
          <Outlet />
        </div>
        <div className={activeSubmenu === 3 ? classes.submenu : classes.hidden}>
          <Title className={classes.submenuTitle}>Подменю 3</Title>
          <p className={classes.text}>Текстовая информация из раздела 1:</p>
          <p className={`${classes.text} ${classes.mb}`}>{textAreaValue === "" ? "пусто" : textAreaValue}</p>
          <p className={classes.text}>Отфильтрованная информация согласно фильтрам раздела 2, блока 1:</p>
          {filteredData.map((item) => {
            return (
              <p key={item.id} className={classes.text}>ID: {item.id}, категория: {item.category}, особенности: {item.features}</p>
            )
          })}
        </div>
      </div>
    </>
  );
}