import React, {useEffect, useState} from "react";
import Table from "./components/Table";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import "./style.css";
import axios from "axios";

const App = () => {
    const [data,setData] = useState([]);
    const [filterData, setFilterData] = useState("all");
    const [sortData, setSortData] = useState([]);
    useEffect(()=>{
        (async function getData(){
            try{
                const response  = await axios.get("http://localhost:3000/sever")
                setData(response.data)
                setSortData(response.data)
            }catch(e){
                console.error(e)
            }
        })()
    },[]);
    return (
        <div className="app">
            <h1>Таблица пользователей</h1>
            <div>
                <Filter statusFilter={setFilterData}/>
                <Sort data={data} onSort={setSortData} />
            </div>
            <Table data={sortData} statusFilter={filterData}/>
        </div>
    );
};

export default App;