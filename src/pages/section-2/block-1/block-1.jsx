import Title from "../../../components/title/title";
import classes from "./block-1.module.css";
import { tableData } from "../../../assets/data/tableData";
import { useState } from "react";

export default function Block1({ 
    className,
    active,
    selectedCategory,
    onCategoryChange,
    filteredData,
    onFilteredDataChange
}) {
    const [searchText, setSearchText] = useState("");

    function handleCategoryChange(event) {
        const category = event.target.value;
        onCategoryChange(category);
        filterData(category, searchText);
    }

    function handleSearchChange(event) {
        const text = event.target.value;
        setSearchText(text);
        filterData(selectedCategory, text);
    }

    function filterData(category, searchText) {
        const filtered = tableData.filter((item) => {
            const categoryMatch = category === "all" || item.category === category;
            const searchMatch = item.features.toLowerCase().includes(searchText.toLowerCase());
            return categoryMatch && searchMatch;
        });
        onFilteredDataChange(filtered);
    }

    return (
        <div className={`${active ? `${classes.container} ${className}` : classes.hidden}`}>
            <div className={classes.selector}>
                <Title>Селектор</Title>
                <select
                    className={classes.selectElement}
                    value={selectedCategory}
                    onChange={handleCategoryChange}>
                    <option value="all">...</option>
                    {[...new Set(tableData.map((item) => item.category))].map((category, index) => {
                        return (
                            <option key={index} value={category}>{category}</option>
                        );
                    })}
                </select>
            </div>
            <div className={classes.textFilter}>
                <Title>Фильтр</Title>
                <input
                    className={classes.filterInput}
                    type="text"
                    placeholder="Введите особенность..."
                    value={searchText}
                    onChange={handleSearchChange}
                />
            </div>
            <div className={classes.tableContainer}>
                <Title>Таблица</Title>
                <table className={classes.table}>
                    <thead className={classes.tableHead}>
                        <tr>
                            <th>ID</th>
                            <th>Категория</th>
                            <th>Особенности</th>
                        </tr>
                    </thead>
                    <tbody className={classes.tableBody}>
                        {filteredData.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.category}</td>
                                    <td>{item.features}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}