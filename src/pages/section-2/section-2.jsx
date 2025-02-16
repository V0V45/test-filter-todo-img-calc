import Header from "../../components/header/header";
import BlockLink from "../../components/block-link/block-link";
import Block1 from "./block-1/block-1";
import Block2 from "./block-2/block-2";
import Block3 from "./block-3/block-3";
import classes from "./section-2.module.css";

export default function Section2({ 
    activeBlock,
    setIsActiveBlock,
    selectedCategory,
    onCategoryChange,
    filteredData,
    onFilteredDataChange,
    tasksData,
    onTaskChange,
    onTaskAdd,
    onTaskDelete,
    onTaskToggle
}) {

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.blockChooser}>
          <BlockLink onClick={() => setIsActiveBlock(1)} isActive={activeBlock === 1}>Блок 1</BlockLink>
          <BlockLink onClick={() => setIsActiveBlock(2)} isActive={activeBlock === 2}>Блок 2</BlockLink>
          <BlockLink onClick={() => setIsActiveBlock(3)} isActive={activeBlock === 3}>Блок 3</BlockLink>
        </div>
        <Block1 
          active={activeBlock === 1}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
          filteredData={filteredData}
          onFilteredDataChange={onFilteredDataChange}
        />
        <Block2
          active={activeBlock === 2}
          tasksData={tasksData}
          onTaskChange={onTaskChange}
          onTaskAdd={onTaskAdd}
          onTaskDelete={onTaskDelete}
          onTaskToggle={onTaskToggle}
        />
        <Block3 active={activeBlock === 3} />
      </div>
    </>
  );
}