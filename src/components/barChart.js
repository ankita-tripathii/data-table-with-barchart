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
        type: 'bar',
        name: `ID: ${selectedRow.id}`,
      };
    }

    return null;
  });

  return (
    <div className=" mb-4">
      <Plot data={chartData.filter((item) => item !== null)} // Filter out null values
        layout={{
          width: 330,
          height: 400,
          yaxis: {
            title: {
              text: 'Rating',
              font: {
                size: 14,
              },
            },
          },
          bargap: 0.05, // Adjust the gap between bars
        }}
        className="col-lg-12 col-md-12 col-sm-12 col-12"
      />
    </div>
  );
};

export default BarChart;
