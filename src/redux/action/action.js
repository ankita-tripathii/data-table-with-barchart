export const toggleCheckedRow = (id) => ({
  type: 'TOGGLE_CHECKED_ROW',
  payload: { id },
});

export const initializeCheckedRows = (initialCheckedRows) => ({
  type: 'INITIALIZE_CHECKED_ROWS',
  payload: { initialCheckedRows },
});