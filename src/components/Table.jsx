import React from "react";
import TableRow from "./TableRow";

const Table = (propsData) => {
    let {data} = propsData
    const {statusFilter} = propsData
    const filterData = [...data]
    switch (statusFilter){
        case "true":{
            data = filterData.filter((row)=>true===row.isActive)
            break;
        }
        case "false":{
            data = filterData.filter((row)=>false===row.isActive)
            break;
        }
        case "all":{
            data = filterData
            break;
        }
    }
    function buildTree(items) {
            const hash = {};
            const root = [];
            items.forEach((item) => {
                hash[item.id] = { ...item, baby: [] };
            });
            items.forEach((item) => {
                if (item.parentId === 0) {
                    root.push(hash[item.id]);
                } else {
                    if (hash[item.parentId]) {
                        hash[item.parentId].baby.push(hash[item.id]);
                    }
                }
            });
            return root;
    }
    const treeData = buildTree(data)

    return (
        <table>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Почта</th>
                <th>Баланс</th>
                <th>Статус</th>
            </tr>
            </thead>
            <tbody>
            {treeData.map((row) => (
                <TableRow key={row.id} row={row} />
            ))}
            </tbody>
        </table>
    );
};

export default Table;