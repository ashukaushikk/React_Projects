import { put } from "redux-saga/effects";
import { callAPIActionSuccess } from "../action/todo_action";
import toast from "react-hot-toast";
import axios from "axios";

export function* fetchAPISaga() {
  const API = "https://jsonplaceholder.typicode.com/todos";
  try {
    const response = yield axios.get(API);
    const data = response?.data;
    if (data) {
      yield put(callAPIActionSuccess(data));
      toast.success("Data fetched successfully");
    }
  } catch (error) {
    console.log("Error", error);
    toast.error("Something went wrong");
  }
}
