/* eslint-disable react/prop-types */
import { Button, Table } from "antd";
import { MdDelete, MdModeEdit, MdOutlineDone } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

function TodoTable({ todo, handleEdit, handleDelete, handleCompleteToDo, editID }) {
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
          {/* Hide actions if editID is true */}
          {!editID && record.status === false && (
            <>
              <Button
                onClick={() => handleEdit(record)}
                icon={<MdModeEdit />}
                type="primary"
                className="text-xl font-bold text-white rounded-full"
              />
              <Button
                onClick={() => handleDelete(record)}
                icon={<MdDelete />}
                type="primary"
                danger
                className="text-xl font-bold text-white rounded-full"
              />
              <Button
                onClick={() => handleCompleteToDo(record)}
                icon={<MdOutlineDone />}
                type="dashed"
                className="text-2xl font-bold text-white bg-green-300 rounded-full"
              />
            </>
          )}
          {record.status && (
            <IoCheckmarkDoneSharp className="text-2xl text-white bg-green-600 rounded-full p-1 size-7" />
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
