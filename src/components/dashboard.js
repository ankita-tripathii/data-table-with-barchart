import React from 'react';
import DataTable from './dataTable';
import BarChart from './barChart';
import Pagination from './pagination';
import SearchBar from './searchBar';
import Sidebar from './sideBar';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <BarChart />
          <SearchBar />
          <DataTable />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
