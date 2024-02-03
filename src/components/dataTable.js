import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCheckedRow } from '../redux/action/action';

const DataTable = ({ data, handleCheckboxChange }) => {

 const checkedRows = useSelector((state) => state.data.checkedRows);
  const dispatch = useDispatch();

  return (
     <div className="table-responsive">
      <table className="table table-bordered table-hover ">
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
                  checked={checkedRows.includes(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
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
    </div>
  );
};

export default DataTable;
