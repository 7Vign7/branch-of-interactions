import React from "react";

const Filter = (propsData) => {
    const {statusFilter} = propsData;
    function filterData (status){
        statusFilter(status.target.value)
    }
    return (
        <div>
            <label>
                Фильтр по статусу:
                <select onChange={filterData}>
                    <option value="all">Все</option>
                    <option value="true">Активные</option>
                    <option value="false">Неактивные</option>
                </select>
            </label>
        </div>
    );
};

export default Filter;