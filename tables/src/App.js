import logo from './logo.svg';
import './App.css';
import MaterialTable from 'material-table'
import React, { useEffect, useState } from "react";


function App() {
  const [tableData, setTableData]=useState([])
  const columns=[
    {title:"Name", field:"name"},
    {title:"Email", field:"email"},
    {title:"Phone Number", field:"phone"},
    {title:"Age", field:"age"},
    {title:"Gender", field:"gender"},
    {title:"City", field:"city"},
  ]

  //for api calls-data

  return (
    <div className="App">
      <h2>React-App</h2>

      <MaterialTable columns={columns} data={tableData} data={tableData}/>
    </div>
  );
}

export default App;
