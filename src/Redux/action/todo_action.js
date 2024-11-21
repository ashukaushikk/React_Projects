import reduxConstants from "../constant/reduxConstant";

export const todo_Add_Action = (payload) => ({
  type: reduxConstants.TODO_ADD_ACTION,
  payload,
});

export const todo_Update_Action = (payload) => ({
  type: reduxConstants.TODO_UPDATE_ACTION,
  payload,
});

export const todo_Delete_Action = (payload) => ({
  type: reduxConstants.TODO_DELETE_ACTION,
  payload,
});

export const callAPIActionLoad = () => ({
  type: reduxConstants.CALL_API_LOAD,
});

export const callAPIActionSuccess = (payload) => ({
  type: reduxConstants.CALL_API_SUCCESS,
  payload,
});

export const callAPIActionFail = () => ({
  type: reduxConstants.CALL_API_FAIL,
});
