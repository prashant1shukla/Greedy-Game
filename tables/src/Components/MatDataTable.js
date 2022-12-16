import React, { Component } from "react";
import axios from 'axios';
import { forwardRef } from 'react';
import MaterialTable from "material-table";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import moment from 'moment';

// import DetailTable from './DetailTable';

const tableIcons = {
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ViewColumn: forwardRef((props,ref)=> <ViewColumn {...props} ref={ref} />),
};

export default class MatDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {person: []};   
  }
    
  componentDidMount(prevProps) {    
    const url = `http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03`;

    axios.get(url)
    .then(data => {
      console.log(data);
      console.log(data.data.data);
      this.setState({ person: data.data.data });

      var newArr = data.data.data.map(function(val) {
        // val.date=val.date.moment().format('MMMM Do YYYY, h:mm:ss a');   
        return {
        date: val.date,
        app_id: val.app_id,
        requests: val.requests,
        responses: val.responses,          
        impressions: val.impressions,          
        clicks: val.clicks,          
        revenue: val.revenue,
        fill: val.requests/val.responses*100,
        ctr: val.clicks/val.impressions*100,
        };
      });
      console.log(data.data.data); 
      this.setState({
        tableArray: newArr  //set state of the weather5days
      },()=> {
         console.log(this.state.tableArray); 
         console.log('this.tableArray ',this.state.tableArray);
      });      
    });
  }

  render() {
    return (      
      <div style={{ maxWidth: "75%", margin: "auto", marginBottom: "auto", }}>
        <MaterialTable
          icons={tableIcons}
          options={{
            // grouping: true
            columnsButton:true
          }}
          columns={[
            {title:"Date", field:"date"},
            {title:"Apps", field:"app_id"},
            {title:"Requests", field:"requests"},
            {title:"Response", field:"responses"},
            {title:"Impressions", field:"impressions"},
            {title:"Clicks", field:"clicks"},
            {title:"Revenue", field:"revenue"},
            {title:"Fill Rate", field:"fill"},
            {title:"CTR", field:"ctr"},
                                           
          ]}
          data={this.state.tableArray}      
        
          title="Greedy Game Analysis"
        />
      </div>
    );
  }
}
 