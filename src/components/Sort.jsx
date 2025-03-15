import React from "react";

const Sort = ({ onSort }) => {
    return (
        <div>
            <label>
                Сортировка
                {/*onChange={(e) => onSort(e.target.value)}*/}
                <select>
                    <option value="">None</option>
                    <option value="balance">Balance</option>
                    <option value="email">Email</option>
                </select>
            </label>
        </div>
    );
};

export default Sort;