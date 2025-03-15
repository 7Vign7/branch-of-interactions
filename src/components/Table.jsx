import React from "react";
import TableRow from "./TableRow";

const Table = ({data}) => {
    function buildTree(items){
        const hash = {}; //parent: [children1,...]
        const filterItems = items.filter((i)=>{
            if(i.parentId !== 0){
                if(hash[i.parentId] === undefined){
                    hash[i.parentId] = [i]
                }else{
                    hash[i.parentId].push(i)
                }
            }
            return i.parentId === 0
        })
        return filterItems.map((i)=>{
            if(hash[i.id] !== undefined){
               return  {
                   ...i,
                   children: hash[i.id]
               }
            }else{
                return i
            }
        })
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