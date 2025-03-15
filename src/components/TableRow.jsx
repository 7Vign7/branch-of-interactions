import React, { useState } from "react";

const TableRow = ({row}) => {


    return (
        <>
            <tr onClick={}>
                <td>
                    {row.name}
                </td>
                <td>{row.email}</td>
                <td>{row.balance}</td>
                <td>{row.isActive ? "Активный" : "Неактивный"}</td>
            </tr>
        </>
    );
};

export default TableRow;