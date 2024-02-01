const initialState = {
  data: [],
  checkedRows: [],
  selectedRows: [], // Add selectedRows array
  ratingData: [], 
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_DATA':
      return {
        ...state,
        data: [...state.data, ...action.payload], // Append new data to existing data
      };

    case 'UPDATE_SELECTED_ROWS':
      return {
        ...state,
        selectedRows: action.payload,
      };

    case 'SET_CHECKED_ROWS':
      return {
        ...state,
        checkedRows: action.payload,
      };

    case 'INITIALIZE_CHECKED_ROWS':
  const initialCheckedRows = state.data.slice(0, 5).map((row) => ({
    ...row,
    checked: true,
  }));
  return {
    ...state,
    checkedRows: initialCheckedRows,
    selectedRows: initialCheckedRows,
    ratingData: initialCheckedRows.map((row) => row.rating),
  };

   case 'REMOVE_UNCHECKED_ROWS':
  const updatedData = state.data.map((row) =>
    state.checkedRows.find((checkedRow) => checkedRow.id === row.id && checkedRow.checked)
      ? row
      : { ...row, checked: false }
  );

  return {
    ...state,
    data: updatedData,
    checkedRows: state.checkedRows.filter((row) => row.checked),
    selectedRows: state.checkedRows.filter((row) => row.checked),
    ratingData: state.checkedRows.filter((row) => row.checked).map((row) => row.rating),
  };
    case 'SET_PRICE_DATA':
      return {
        ...state,
        ratingData: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
