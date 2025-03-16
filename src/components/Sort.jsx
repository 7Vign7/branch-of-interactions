import React from "react";

const Sort = (propsData) => {
    const {onSort} = propsData;
    const {data} = propsData;
    function sortData(statusSort){
        const sortedData = [...data];
        switch (statusSort.target.value){
            case "":{
                onSort(data)
                break;
            }
            case "balance":{
                sortedData.sort((a,b)=>{
                    let newA = +a.balance.replace(/[$,]/g,"")
                    let newB = +b.balance.replace(/[$,]/g,"")
                    return  newB - newA
                })
                onSort(sortedData)
                break;
            }
            case "email":{
                sortedData.sort((a,b)=> a.email.localeCompare(b.email))
                onSort(sortedData)
                break;
            }
        }
    }
    return (
        <div>
            <label>
                Сортировка
                <select onChange={sortData}>
                    <option value="">Нет</option>
                    <option value="balance">Баланс</option>
                    <option value="email">Почта</option>
                </select>
            </label>
        </div>
    );
};

export default Sort;