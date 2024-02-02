import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRatingData } from '../redux/action/action';
import Plotly from 'plotly.js-basic-dist';

const BarChart = () => {
  const dispatch = useDispatch();
  const selectedRows  = useSelector((state) => state.data.selectedRows );

  useEffect(() => {

    console.log('Selected Rows:', selectedRows);

    // Extract the ratings from selectedRows
  const ratingData = selectedRows.map((product) => product.rating);

  // Dispatch setRatingData with the extracted ratings
  dispatch(setRatingData(ratingData));

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
  }, [selectedRows, dispatch]);

  return <div id="barChart" className="mt-4"></div>;
};

export default BarChart;
