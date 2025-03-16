import React from "react";
import TableRow from "./TableRow";

const Table = ({data}) => {
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