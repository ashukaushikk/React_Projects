/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { callAPIActionLoad } from "../Redux/action/todo_action";
import { useDispatch, useSelector } from "react-redux";

function Async() {
  const fetchData = useSelector((data) => data?.todoReducer?.fetchData);
  const dispatch = useDispatch();
  console.log("fetchData", fetchData);
  useEffect(() => {
    dispatch(callAPIActionLoad());
  }, []);
  return (
    <div>
      <h1>Async</h1>
      {fetchData ? (
        fetchData.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          );
        })
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Async;
