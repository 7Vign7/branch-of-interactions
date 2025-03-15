import React from "react";

const Filter = ({ onFilter }) => {
    return (
        <div>
            <label>
                Фильтр по статусу:
                {/*onChange={(e) => onFilter(e.target.value === "all" ? "all" : e.target.value === "true")}*/}
                <select >
                    <option value="all">All</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
            </label>
        </div>
    );
};

export default Filter;