import { StrictMode, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Section1 from './pages/section-1/section-1.jsx';
import Section2 from './pages/section-2/section-2.jsx';
import Section3 from './pages/section-3/section-3.jsx';
import { tableData } from "./assets/data/tableData.js";
import { tasksData } from './assets/data/tasksData.js';
import Calc from './pages/section-3/calc/calc.jsx';

export default function MainApp() {
    const [color, setColor] = useState("red");
    const [textAreaValue, setTextAreaValue] = useState("");
    const [activeBlock, setIsActiveBlock] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredData, setFilteredData] = useState(tableData);
    const [currentTasksData, setCurrentTasksData] = useState(tasksData);

    function handleCategoryChange(category) {
        setSelectedCategory(category);
    }

    function handleFilteredDataChange(data) {
        setFilteredData(data);
    }

    function handleTaskChange(taskID, newText) {
        setCurrentTasksData(prevTasks => {
            return (
                prevTasks.map(task => {
                    return (
                        taskID === task.id ? {...task, task: newText} : task
                    );
                })
            );
        });
    }

    function handleAddTask() {
        setCurrentTasksData(prevTasks => {
            return (
                [...prevTasks, {id: Date.now(), task: ``, isDone: false}]
            );
        })
    }

    function handleDeleteTask(taskID) {
        setCurrentTasksData(prevTasks => {
            return (
                prevTasks.filter(task => task.id !== taskID)
            );
        }) 
    }

    function handleTaskToggle(taskID) {
        setCurrentTasksData(prevTasks => {
            return (
                prevTasks.map(task => {
                    return (
                        taskID === task.id ? {...task, isDone: !task.isDone} : task
                    );
                })
            );
        })
    }

    return (
        <StrictMode>
            <BrowserRouter basename='/test-filter-todo-img-calc'>
                <Routes>
                    <Route
                        index
                        element={
                        <Section1
                            color={color}
                            setColor={setColor}
                            textAreaValue={textAreaValue}
                            setTextAreaValue={setTextAreaValue}
                        />}
                    />
                    <Route
                        path='/section-2'
                        element={
                            <Section2
                                activeBlock={activeBlock}
                                setIsActiveBlock={setIsActiveBlock}
                                selectedCategory={selectedCategory}
                                onCategoryChange={handleCategoryChange}
                                filteredData={filteredData}
                                onFilteredDataChange={handleFilteredDataChange}
                                tasksData={currentTasksData}
                                onTaskChange={handleTaskChange}
                                onTaskAdd={handleAddTask}
                                onTaskDelete={handleDeleteTask}
                                onTaskToggle={handleTaskToggle}
                        />}
                    />
                    <Route
                        path='/section-3/*'
                        element={
                        <Section3
                            color={color}
                            textAreaValue={textAreaValue}
                            selectedCategory={selectedCategory}
                            filteredData={filteredData}
                            tasksData={currentTasksData}
                        />}
                    >
                        <Route path="calc/:expression?" element={<Calc />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
}