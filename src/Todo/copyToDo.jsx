// import { Button, Input, Layout, Row, Col, Space } from "antd";
// import { useEffect, useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import TodoTable from "./Table";
// import { useDispatch, useSelector } from "react-redux";
// import { todo_Add_Action } from "../Redux/action/todo_action";

// const { Header, Content, Footer } = Layout;

// const getLocalTodo = () => {
//   const localTodo = localStorage.getItem("todo");
//   if (localTodo) {
//     return JSON.parse(localTodo);
//   } else {
//     return [];
//   }
// };

// function Todo() {
//   const [todo, setTodo] = useState(getLocalTodo());
//   const [editIndex, setEditIndex] = useState(null);
//   const dispatch = useDispatch();
//   const todoData = useSelector((data) => data);
//   console.log("Selector_todoData", todoData);

//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({ defaultValues: { todo: "" } });

//   const onSubmit = (data) => {
//     if (data.todo === "") {
//       return toast.error("Todo is required");
//     } else if (editIndex !== null) {
//       const updateTodo = [...todo];
//       updateTodo[editIndex] = data.todo;
//       setTodo(updateTodo);
//       setEditIndex(null);
//       reset({ todo: "" });
//       toast.success("Todo updated successfully");
//     } else if (todo.includes(data.todo)) {
//       return toast.error("Todo already exists");
//     } else {
//       setTodo((prevTodo) => [...prevTodo, data.todo]);
//       localStorage.setItem("todo", JSON.stringify(todo));
//       toast.success("Todo added successfully");
//       reset({ todo: "" });
//     }
//     dispatch(todo_Add_Action(data));
//   };

//   const handleEdit = (data) => {
//     console.log("EditButton_Data", data);
//     setEditIndex(data);
//     const editTodo = todo[data];
//     reset({ todo: editTodo });
//   };

//   const handleDelete = (index) => {
//     const deleteTodo = todo.filter((_, i) => i !== index);
//     setTodo(deleteTodo);
//   };

//   useEffect(() => {
//     localStorage.setItem("todo", JSON.stringify(todo));
//   }, [todo]);

//   return (
//     <Layout className="todo-layout">
//       <Header className="header bg-[#001529]">
//         <h1 className="text-4xl text-white flex items-center justify-center">ToDo-List</h1>
//       </Header>
//       <Content className="content px-0 py-12 mt-8">
//         <Row justify="center">
//           <Col span={24} lg={12}>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <Row gutter={16}>
//                 <Col span={18}>
//                   <Controller
//                     name="todo"
//                     control={control}
//                     rules={{
//                       required: "Todo is required",
//                       minLength: { value: 3, message: "Minimum 3 characters required" },
//                     }}
//                     render={({ field }) => <Input {...field} placeholder="Enter your todo" size="large" />}
//                   />
//                   <div className="error-message">
//                     {errors.todo && <p style={{ color: "red" }}>{errors.todo.message}</p>}
//                   </div>
//                 </Col>
//                 <Col span={6}>
//                   <div className="flex">
//                     <Space size="middle" style={{ width: "100%" }}>
//                       <Button type="primary" htmlType="submit" size="large" block>
//                         {editIndex !== null ? "Update" : "Add"}
//                       </Button>
//                     </Space>
//                     <Space size="middle" style={{ width: "100%" }}>
//                       <Button type="default" danger onClick={() => reset()} size="large" block>
//                         Clear
//                       </Button>
//                     </Space>
//                   </div>
//                 </Col>
//               </Row>
//             </form>
//           </Col>
//         </Row>
//         <TodoTable todo={todo} handleEdit={handleEdit} handleDelete={handleDelete} />
//       </Content>

//       <Footer style={{ textAlign: "center", padding: "20px" }}>
//         <Button size="large" onClick={() => setTodo([])}>
//           Remove All
//         </Button>
//       </Footer>
//     </Layout>
//   );
// }

// export default Todo;
