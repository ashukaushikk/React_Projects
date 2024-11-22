import { Button, Input, Layout, Row, Col, Space } from "antd";
import { Controller, useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import TodoTable from "./Table";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Add_TODO_Action_Success } from "../Redux/action/todo_action";

const { Header, Content, Footer } = Layout;

function Todo() {
  const todo_Data = useSelector((data) => data?.todoReducer?.todo_Data);
  console.log("TODO_Data", todo_Data);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { todo: "" } });

  const onSubmit = (data) => {
    if (data.todo.trim() === "") {
      return;
    } else if (todo_Data.some((todo) => todo.toLowerCase() === data.todo.toLowerCase())) {
      return toast.error("Todo Already Exist");
    } else {
      toast.success("Todo Added Successfully");
      dispatch(Add_TODO_Action_Success({ todo: data.todo }));
      reset({ todo: "" });
    }
  };

  const handleEdit = (data) => {};

  const handleDelete = (index) => {};

  return (
    <Layout className="todo-layout">
      <Header className="header bg-[#001529]">
        <h1 className="text-4xl text-white flex items-center justify-center">ToDo-List</h1>
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
                    }}
                    render={({ field }) => <Input {...field} placeholder="Enter your todo" size="large" />}
                  />
                  <div className="error-message">
                    {errors.todo && <p style={{ color: "red" }}>{errors.todo.message}</p>}
                  </div>
                </Col>
                <Col span={6}>
                  <div className="flex">
                    <Space size="middle" style={{ width: "100%" }}>
                      <Button type="primary" htmlType="submit" size="large" block>
                        ADD
                      </Button>
                    </Space>
                    <Space size="middle" style={{ width: "100%" }}>
                      <Button type="default" danger onClick={() => reset()} size="large" block>
                        Clear
                      </Button>
                    </Space>
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <TodoTable todo={todo_Data} handleEdit={handleEdit} handleDelete={handleDelete} />
      </Content>

      <Footer style={{ textAlign: "center", padding: "20px" }}>
        <Button size="large">Remove All</Button>
      </Footer>
    </Layout>
  );
}

export default Todo;
