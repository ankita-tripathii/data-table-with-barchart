import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Plotly from 'plotly.js-basic-dist';

const BarChart = () => {
  const selectedRows  = useSelector((state) => state.data.selectedRows );

  useEffect(() => {
     const chartData = [
      {
        x: selectedRows .map((product) => product.title),
        y: selectedRows .map((product) => product.rating),
        type: 'bar',
      },
    ];

    const layout = { width: 600, height: 400, title: 'Rating Chart', yaxis: { title: 'Rating' } };

    const chartElement = document.getElementById('barChart');
    if (chartElement) {
      Plotly.newPlot(chartElement, chartData, layout);
    }
  }, [selectedRows ]);

  return <div id="barChart" className="mt-4"></div>;
};

export default BarChart;
