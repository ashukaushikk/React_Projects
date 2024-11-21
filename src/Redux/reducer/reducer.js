import toast from "react-hot-toast";
import reduxConstants from "../constant/reduxConstant";

const initialState = {
  todo: [],
  fetchData: [],
  fetchDataLoader: false,
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case reduxConstants.TODO_ADD_ACTION:
      return { ...state, todo: [...state.todo, action.payload.todo] };
    case reduxConstants.TODO_UPDATE_ACTION:
      return { ...state, todo: action.payload };
    case reduxConstants.TODO_DELETE_ACTION:
      return { ...state, todo: action.payload };
    case reduxConstants.ALL_TODO_DELETE_ACTION:
      return { ...state, todo: [] };

    case reduxConstants.CALL_API_LOAD:
      return { ...state, fetchDataLoader: true };
    case reduxConstants.CALL_API_SUCCESS:
      return { ...state, fetchDataLoader: false, fetchData: action.payload };
    case reduxConstants.CALL_API_FAIL:
      return { ...state, fetchDataLoader: false };

    default:
      return { ...state };
  }
}

export default todoReducer;
