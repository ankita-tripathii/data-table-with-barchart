import React from 'react';
import BarChart from './barChart';
import ParentComponent from './parantComponent';
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
          <ParentComponent/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
