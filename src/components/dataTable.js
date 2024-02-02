import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckedRows, updateSelectedRows, setRatingData } from '../redux/action/action';

const DataTable = ({ data }) => {

  const dispatch = useDispatch();
  const checkedRows = useSelector((state) => state.data.checkedRows);

  useEffect(() => {
  console.log('Data:', data);
  console.log('Checked Rows:', checkedRows);

  // Initialize only the first 5 checkboxes when data is available
  if (data.length > 0 && checkedRows.length === 0) {
    const initialCheckedRows = data.slice(0, 5).map((row) => ({
      ...row,
      checked: true,
    }));
    dispatch(setCheckedRows(initialCheckedRows));
    dispatch(updateSelectedRows(initialCheckedRows));
  }
}, [data, checkedRows.length, dispatch]);

 const handleCheckboxChange = (rowId) => {
  const updatedData = data.map((row) =>
    row.id === rowId ? { ...row, checked: !row.checked } : row
  );

  const newCheckedRows = updatedData.filter((row) => row.checked);
  const newRatingData = newCheckedRows.map((row) => row.rating);

  dispatch(setCheckedRows(newCheckedRows));
  dispatch(updateSelectedRows(newCheckedRows));
  dispatch(setRatingData(newRatingData)); // Update rating data
};

  // Check if data is an array
  if (!Array.isArray(data)) {
    console.error('Invalid data format: data must be an array.');
    return null;
  }

  return (
     <div className="table-responsive">
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
