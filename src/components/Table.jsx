import React from "react";
import TableRow from "./TableRow";

const Table = (propsData) => {
    let {data} = propsData
    const {statusFilter} = propsData
    switch (statusFilter){
        case "true":{
            data = data.filter((row)=>true===row.isActive)
            break;
        }
        case "false":{
            data = data.filter((row)=>false===row.isActive)
            break;
        }
        case "all":{
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