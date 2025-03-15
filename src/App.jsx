import React, {useEffect, useState} from "react";
import Table from "./components/Table";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import "./style.css";
import axios from "axios";

const App = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        (async function getData(){
            try{
                const response  = await axios.get("http://localhost:3000/sever")
                setData(response.data)
            }catch(e){
                console.error(e)
            }
        })()
        // getData()
    },[])

    return (
        <div className="app">
            <h1>Таблица пользователей</h1>
            {/*<Filter onFilter={handleFilter} />*/}
            {/*<Sort onSort={handleSort} />*/}
            <Table data={data} />
        </div>
    );
};

export default App;