import reduxConstants from "../constant/reduxConstant";

const initialState = {
  todo_Data: [],
  completed_ToDo: [],
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
      return { ...state, todo_Data: [], completed_ToDo: [] };

    case reduxConstants.COMPLETE_TODO_ACTION_SUCCESS:
      return {
        ...state,
        todo_Data: action.payload.inCompleteToDo,
        completed_ToDo: [...state.completed_ToDo, action.payload.completeToDo],
      };
    default:
      return state;
  }
}

export default todoReducer;
