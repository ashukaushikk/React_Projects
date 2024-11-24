import { Button, Input, Layout, Row, Col, Space } from "antd";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { Controller, useForm } from "react-hook-form";
import TodoTable from "./Table";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  Add_TODO_Action_Success,
  Complete_TODO_Action_Success,
  Delete_All_TODOs_Action_Success,
  Update_TODO_Action_Success,
} from "../Redux/action/todo_action";
import { nanoid } from "nanoid";
import { useState } from "react";

const { Header, Content, Footer } = Layout;

function Todo() {
  const todo_Data = useSelector((data) => data?.todoReducer?.todo_Data);
  const complete_Todo = useSelector((data) => data?.todoReducer?.completed_ToDo);
  console.log("complete_Todo", complete_Todo);

  const [editID, setEditID] = useState(null);
  const completed = false;
  const uniqueId = nanoid();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { todo: "" } });

  // Submit ToDo's Action
  const onSubmit = (data) => {
    if (data.todo.trim() === "") {
      return;
    }
    if (editID) {
      // Update existing todo
      const updateToDo = todo_Data.map((item) => (item.id === editID ? { ...item, todo: data.todo.trim() } : item));
      dispatch(Update_TODO_Action_Success(updateToDo));
      reset({ todo: "" });
      toast.success("Todo Updated Successfully");
      setEditID(null);
    } else {
      // Add new todo
      const todo = { id: uniqueId, todo: data.todo.trim(), status: completed };
      dispatch(Add_TODO_Action_Success(todo));
      toast.success("Todo Added Successfully");
      reset({ todo: "" }); // Clear input field
    }
  };

  // Update ToDo's Action
  const handleEdit = (data) => {
    setEditID(data.id);
    reset({ todo: data.todo });
  };

  // Delete ToDo's Action
  const handleDelete = (data) => {
    const deleteToDo = todo_Data.filter((item) => item.id !== data.id);
    dispatch(Update_TODO_Action_Success(deleteToDo));
    toast.success("Todo Deleted Successfully");
  };

  // Remove All ToDo's Action
  const handleClearToDoList = () => {
    dispatch(Delete_All_TODOs_Action_Success());
    toast.success("All ToDo's Deleted Successfully");
  };

  // Complete ToDo's Action
  const handleCompleteToDo = (data) => {
    const completeToDo = { ...data, status: true };
    const inCompleteToDo = todo_Data.filter((item) => item.id !== data.id);
    dispatch(Complete_TODO_Action_Success({ completeToDo, inCompleteToDo }));
    toast.success("Todo Completed Successfully");
  };

  // Validation for Input
  const validateToDO = (value) => {
    if (todo_Data.some((todo) => todo.todo.toLowerCase() === value.toLowerCase())) {
      return "Todo already exists";
    }
    if (complete_Todo.some((todo) => todo.todo.toLowerCase() === value.toLowerCase())) {
      return "Todo already completed";
    }
    return true;
  };

  return (
    <Layout className="todo-layout">
      <Header className="header w-full bg-[#001529] text-white text-5xl font-semibold flex justify-center items-center gap-5">
        <span>
          <FaArrowsTurnToDots />
        </span>
        <h1>ToDo-List</h1>
      </Header>
      <Content className="content px-0 py-12 mt-8">
        <Row justify="center">
          <Col span={24} lg={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row gutter={16}>
                <Col span={18}>
                  <Controller
                    name="todo"
                    control={control}
                    rules={{
                      required: "Todo is required",
                      minLength: { value: 3, message: "Minimum 3 characters required" },
                      maxLength: { value: 60, message: "Maximum 60 characters allowed" },
                      validate: validateToDO,
                    }}
                    render={({ field }) => <Input allowClear {...field} placeholder="Enter your todo" size="large" />}
                  />
                  <div className="error-message">
                    {errors.todo && <p style={{ color: "red" }}>{errors.todo.message}</p>}
                  </div>
                </Col>
                {/* Button Column */}
                <Col span={5}>
                  <div className="flex">
                    {/* ADD || Update Button */}
                    <Space size="middle" style={{ width: "100%" }}>
                      <Button type="primary" htmlType="submit" size="large" block>
                        {editID ? "Update" : "Add"}
                      </Button>
                      {editID && (
                        <Button
                          onClick={() => {
                            reset({ todo: "" });
                            setEditID(null);
                          }}
                          type="primary"
                          size="large"
                          danger>
                          Cancel
                        </Button>
                      )}
                    </Space>
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        {/* UnComplete ToDo Table */}
        <br />
        <h1 className="text-2xl font-bold mb-4 text-center">UnComplete ToDo</h1>
        <TodoTable
          todo={todo_Data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleCompleteToDo={handleCompleteToDo}
          editID={editID}
        />
        {/* Complete ToDo Table */}
        <br />
        <h1 className="text-2xl font-bold mb-4 text-center">Complete ToDo</h1>
        {<TodoTable todo={complete_Todo} />}
      </Content>

      {/* Remove_All_ToDo_Button */}
      <Footer style={{ textAlign: "center", padding: "20px" }}>
        <Button size="large" onClick={handleClearToDoList} type="primary" danger>
          Remove All ToDo
        </Button>
      </Footer>
    </Layout>
  );
}

export default Todo;
