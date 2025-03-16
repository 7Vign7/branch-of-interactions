import React from "react";

const Filter = (propsData) => {

    const {onFilter} = propsData;
    const {data} = propsData;

    function filterData (e){
        switch (e.target.value){
            case "true":{
                onFilter(data.filter((row)=>true===row.isActive))
                break;
            }
            case "false":{
                onFilter(data.filter((row)=>false===row.isActive))
                break;
            }
            case "all":{
                onFilter(data)
                break;
            }
        }
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