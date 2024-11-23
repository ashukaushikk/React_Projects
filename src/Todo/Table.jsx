/* eslint-disable react/prop-types */
import { Button, Table } from "antd";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { FcCancel, FcOk } from "react-icons/fc";

function TodoTable({ todo, handleEdit, handleDelete, handleCompleteToDo }) {
  const columns = [
    {
      title: "Sr.No.",
      dataIndex: "serialNumber",
    },
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "ToDo",
      dataIndex: "todo",
      render: (todo, record) => (
        <p className={record.status === true ? "line-through text-green-400 font-bold" : "text-red-400 font-bold"}>
          {todo}
        </p>
      ), // Corrected
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (status ? "Completed" : "Incomplete"),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          {record.status === false && (
            <Button onClick={() => handleEdit(record)} icon={<MdModeEdit />} type="primary" className="text-xl" />
          )}
          {record.status === false && (
            <Button
              onClick={() => handleDelete(record)}
              icon={<MdDelete />}
              type="primary"
              danger
              className="text-xl"
            />
          )}
          {record.status === false ? (
            <Button onClick={() => handleCompleteToDo(record)} icon={<FcCancel />} type="default" className="text-xl" />
          ) : (
            <FcOk className="text-3xl" />
          )}
        </div>
      ),
    },
  ];

  const dataSource = todo.length
    ? todo.map((item, index) => ({
        key: index || "",
        index: index || "",
        id: item.id || "",
        serialNumber: index + 1 || "",
        todo: item.todo || "",
        status: item.status || false,
      }))
    : [];

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
}
export default TodoTable;
