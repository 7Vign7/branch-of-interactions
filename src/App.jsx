import React, {useEffect, useState} from "react";
import Table from "./components/Table";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import "./style.css";
import axios from "axios";

const App = () => {
    const [data,setData] = useState([]);
    const [filterData, setFilterData] =useState([]);

    useEffect(()=>{
        (async function getData(){
            try{
                const response  = await axios.get("http://localhost:3000/sever")
                setData(response.data)
                setFilterData(response.data)
            }catch(e){
                console.error(e)
            }
        })()
    },[]);

    return (
        <div className="app">
            <h1>Таблица пользователей</h1>
            <div>
                <Filter data={data} onFilter={setFilterData} />
                <Sort data={data} onSort={setData} />
            </div>
            <Table data={filterData} />
        </div>
    );
};

export default App;