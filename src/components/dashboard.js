import React from 'react';
import Report from './report';
import Sidebar from './sideBar';

const Dashboard = () => {
  return (
    <div className="container-fluid justify-content-center">
      <div className="row box-sizing: 0">
          <div className=" bg-dark col-lg-2 col-md-2 col-sm-11 col-xs-11 p-0">
          <Sidebar />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-9 col-xs-9 ">
          <Report />
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
