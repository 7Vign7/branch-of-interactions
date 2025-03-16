import React from "react";

const Sort = (propsData) => {


    function sortData(){

    }

    return (
        <div>
            <label>
                Сортировка
                {/*onChange={(e) => onSort(e.target.value)}*/}
                <select onChange={}>
                    <option value="">Нет</option>
                    <option value="balance">Баланс</option>
                    <option value="email">Почта</option>
                </select>
            </label>
        </div>
    );
};

export default Sort;