import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Plotly from 'plotly.js-basic-dist';

const BarChart = () => {
  const dispatch = useDispatch();
  const priceData = useSelector((state) => state.data.priceData);

  useEffect(() => {
     const chartData = [
      {
        x: priceData.map((product) => product.title),
        y: priceData.map((product) => product.rating),
        type: 'bar',
      },
    ];

    const layout = { width: 600, height: 400, title: 'Rating Chart', yaxis: { title: 'Rating' } };

    const chartElement = document.getElementById('barChart');
    if (chartElement) {
      Plotly.newPlot(chartElement, chartData, layout);
    }
  }, [priceData]);

  return <div id="barChart" className="mt-4"></div>;
};

export default BarChart;
