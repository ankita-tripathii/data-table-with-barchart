import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelectedRows, setCheckedRows, setData } from '../redux/action/action';

const DataTable = () => {
  const data = useSelector((state) => state.data.data);
  const checkedRows = useSelector((state) => state.data.checkedRows);
  const dispatch = useDispatch();

  // Initial checked rows on page load
  useEffect(() => {
    dispatch({ type: 'INITIALIZE_CHECKED_ROWS' });
  }, [dispatch]);

  const handleCheckboxChange = (rowId) => {
  const updatedData = data.map((row) =>
    row.id === rowId ? { ...row, checked: !row.checked } : row
  );

  const newCheckedRows = updatedData.filter((row) => row.checked);

  // Dispatch new action to update checked rows in the store
  dispatch(setCheckedRows(newCheckedRows));

  // Dispatch new action to update selectedRows in the store
  dispatch(updateSelectedRows(newCheckedRows));

  if (!newCheckedRows.find((row) => row.id === rowId)) {
    // Dispatch new action to remove unchecked rows in the store
    dispatch({ type: 'REMOVE_UNCHECKED_ROWS' });
  }

  console.log('New Checked Rows:', newCheckedRows);
  };


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
  );
};

export default DataTable;