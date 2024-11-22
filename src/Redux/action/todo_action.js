import reduxConstants from "../constant/reduxConstant";

export const Add_TODO_Action_Success = (payload) => ({
  type: reduxConstants.ADD_TODO_ACTION_SUCCESS,
  payload,
});

export const Update_TODO_Action_Success = (payload) => ({
  type: reduxConstants.UPDATE_TODO_ACTION_SUCCESS,
  payload,
});

export const Delete_TODO_Action_Success = (payload) => ({
  type: reduxConstants.DELETE_TODO_ACTION_SUCCESS,
  payload,
});

export const Delete_All_TODOs_Action_Success = (payload) => ({
  type: reduxConstants.DELETE_ALL_TODOs_ACTION_SUCCESS,
  payload,
});
