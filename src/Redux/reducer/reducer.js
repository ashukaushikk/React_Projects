import reduxConstants from "../constant/reduxConstant";

const initialState = {
  todo_Data: [],
  todo_Loader: false,
};

function todoReducer(state = initialState, action) {
  console.log("Reducer", action.payload);
  switch (action.type) {
    case reduxConstants.ADD_TODO_ACTION_LOAD:
      return { ...state, todo_Loader: true };
    case reduxConstants.ADD_TODO_ACTION_SUCCESS:
      return { ...state, todo_Loader: false, todo_Data: [...state.todo_Data, action.payload.todo] };

    case reduxConstants.UPDATE_TODO_ACTION_LOAD:
      return { ...state, todo_Loader: true };
    case reduxConstants.UPDATE_TODO_ACTION_SUCCESS:
      return { ...state, todo_Loader: false, todo_Data: action.payload };

    case reduxConstants.DELETE_TODO_ACTION_LOAD:
      return { ...state, todo_Loader: true };

    case reduxConstants.DELETE_TODO_ACTION_SUCCESS:
      return { ...state, todo_Loader: false, todo_Data: action.payload };

    case reduxConstants.DELETE_ALL_TODOs_ACTION_LOAD:
      return { ...state, todo_Loader: true };
    case reduxConstants.DELETE_ALL_TODOs_ACTION_SUCCESS:
      return { ...state, todo_Loader: false, todo_Data: [] };

    default:
      return { ...state };
  }
}

export default todoReducer;
