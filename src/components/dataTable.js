import React from 'react';

const DataTable = ({ data }) => {
  // Check if data is an array
  if (!Array.isArray(data)) {
    console.error('Invalid data format: data must be an array.');
    return null;
  }

  return (
    <table className="table table-bordered table-hover mt-4">
      <thead className="thead-light">
        <tr>
          <th></th>
          <th>ID</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                checked={row.checked}
              />
            </td>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.brand}</td>
            <td>{row.category}</td>
            <td>{row.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
