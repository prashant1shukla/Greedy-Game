// import logo from './logo.svg';
import './App.css';
import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react';


function App() {
  const [tableData, setData]=useState([])
  const columns=[
    // {title:"Name", field:"name"},
    // {title:"Email", field:"email"},
    // {title:"Phone Number", field:"phone"},
    // {title:"Age", field:"age"},
    // {title:"Gender", field:"gender"},
    // {title:"City", field:"city"},
    {title:"Date", field:"date"},
    {title:"Apps", field:"apps"},
    {title:"Clicks", field:"clicks"},
    {title:"Requests", field:"requests"},
    {title:"Revenue", field:"revenue"},
    {title:"Fill Rate", field:"fill"},
    {title:"CTR", field:"ctr"},
  ]

  useEffect(()=>{
    fetch("http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03")
    .then(resp=>resp.json())
    .then(resp=>setData(resp))
  },[])

  //for api calls-data

  return (
    <div className="App">
      <h2>Greedy Game</h2>

      <MaterialTable 
        title="Employee Data"
        data={tableData}
        columns={columns}
      />
    </div>
  );
}

export default App;
