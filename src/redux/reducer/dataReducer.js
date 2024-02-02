const initialState = {
  data: [],
  checkedRows: [],
  selectedRows: [],
  ratingData: [],
};

const dataReducer = (state = initialState, action) => {

  console.log('Current State:', state);
  console.log('Action:', action);

  switch (action.type) {
    case 'SET_DATA':
  return {
    ...state,
    data: state.data.concat(action.payload),
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
    ratingData: action.payload.map((row) => row.rating),
};

case 'REMOVE_UNCHECKED_ROWS':
  const updatedData = state.data.filter((row) =>
    state.checkedRows.find(
      (checkedRow) => checkedRow.id === row.id && checkedRow.checked
    )
  );

  const newCheckedRows = updatedData.filter((row) => row.checked);
  const newRatingData = newCheckedRows.map((row) => row.rating);

  return {
    ...state,
    data: updatedData,
    checkedRows: newCheckedRows,
    selectedRows: newCheckedRows,
    ratingData: newRatingData,
};

      case 'INITIALIZE_CHECKED_ROWS':
  const initialCheckedRows = state.data.slice(0, 5).map((row) => ({
    ...row,
    checked: true,
  }));
  const initialRatingData = initialCheckedRows.map((row) => row.rating);
  return {
    ...state,
    checkedRows: initialCheckedRows,
    selectedRows: initialCheckedRows,
    ratingData: initialRatingData,
  };
    case 'SET_RATING_DATA':
  // If payload is not provided, use the ratings from the currently checked rows
  const updatedRatingData = action.payload || state.checkedRows.map((row) => row.rating);

  return {
    ...state,
    ratingData: updatedRatingData,
};
      default:
      return state;
  }
};

export default dataReducer;
