import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const BarChart = ({ data }) => {
  const checkedRows = useSelector((state) => state.data.checkedRows);

  const chartData = checkedRows.map((id) => {
    const selectedRow = data.find((row) => row.id === id);

    if (selectedRow) {
      return {
        x: [selectedRow.title],
        y: [selectedRow.rating],
        width: [0.9],
        type: 'bar',
        name: `ID: ${selectedRow.id}`,
      };
    }

    return null;
  });

  return (
    <div className="bar-chart-container">
      <Plot
        data={chartData.filter((item) => item !== null)}
        layout={{
          autosize: true, // Enable autosizing
          margin: { l: 70, r: 50, b: 70, t: 50,},
          marker: { line: { width: 10 }, },
          yaxis: {
            title: {
              text: 'Rating',
              font: {
                size: 20,
              },
            },
          },
          bargap: 0.02,
        }}
        className="col-lg-12 col-md-12 col-sm-12 col-12"
      />
    </div>
  );
};

export default BarChart;
