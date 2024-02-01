export const setData = (data) => ({
  type: 'SET_DATA',
  payload: data,
});

export const updateSelectedRows = (selectedRows) => ({
  type: 'UPDATE_SELECTED_ROWS',
  payload: selectedRows,
});

export const setCheckedRows = (rows) => ({
  type: 'SET_CHECKED_ROWS',
  payload: rows,
});