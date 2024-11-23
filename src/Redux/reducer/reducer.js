import reduxConstants from "../constant/reduxConstant";

const initialState = {
  todo_Data: [],
};

function todoReducer(state = initialState, action) {
  console.log("Reducer", action.payload);
  switch (action.type) {
    case reduxConstants.ADD_TODO_ACTION_SUCCESS:
      return { ...state, todo_Data: [...state.todo_Data, action.payload] };

    case reduxConstants.UPDATE_TODO_ACTION_SUCCESS:
      return { ...state, todo_Data: action.payload };

    case reduxConstants.DELETE_TODO_ACTION_SUCCESS:
      return { ...state, todo_Data: action.payload };

    case reduxConstants.DELETE_ALL_TODOs_ACTION_SUCCESS:
      return { ...state, todo_Data: [] };

    case reduxConstants.TOGGLE_STATUS_ACTION_SUCCESS:
      return { ...state, todo_Data: action.payload };
    default:
      return state;
  }
}

export default todoReducer;
