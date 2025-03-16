import React, { useState } from "react";

const TableRow = ({row}) => {
    const [visibleBaby, setVisibleBaby] = useState(false)
    function parent(p){
        return p.baby.length >= 1
    }
    function showBaby(){
        if(!visibleBaby){
            setVisibleBaby(true)
        }else{
            setVisibleBaby(false)
        }
    }
    function parentActive(){
        if(visibleBaby){
            return {backgroundColor:"rgba(0, 0, 0, 0.1)"}
        }else{
            return {}
        }
    }
    return (
        <>
        {parent(row)?
            <tr onClick={showBaby} style={parentActive()}>
                <td>{visibleBaby?`🡣 ${row.name}`:`🡢 ${row.name}`}</td>
                <td>{row.email}</td>
                <td>{row.balance}</td>
                <td>{row.isActive ? "Активный" : "Неактивный"}</td>
            </tr>
        : <tr>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.balance}</td>
            <td>{row.isActive ? "Активный" : "Неактивный"}</td>
        </tr>
        }
        {visibleBaby? row.baby.map((row) => (
                <TableRow key={row.id} row={row}/>
            ))
            : null
        }
        </>
    );
}
export default TableRow;