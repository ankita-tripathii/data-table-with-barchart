const initialState = {
  checkedRows: [], // to store checked rows
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKED_ROW':
      const { id } = action.payload;
      const isChecked = state.checkedRows.includes(id);

      return {
        ...state,
        checkedRows: isChecked
          ? state.checkedRows.filter((rowId) => rowId !== id)
          : [...state.checkedRows, id],
      };


      case 'INITIALIZE_CHECKED_ROWS':
      return {
        ...state,
        checkedRows: action.payload.initialCheckedRows,
      };

      
    default:
      return state;
  }
};

export default dataReducer;