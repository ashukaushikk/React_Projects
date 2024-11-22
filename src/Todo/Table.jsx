/* eslint-disable react/prop-types */
import { Button, Table } from "antd";
import { MdDelete, MdModeEdit } from "react-icons/md";

function TodoTable({ todo, handleEdit, handleDelete }) {
  const columns = [
    {
      title: "Sr.No.",
      dataIndex: "serialNumber",
    },
    {
      title: "ToDo",
      dataIndex: "todo",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button onClick={() => handleEdit(record)} icon={<MdModeEdit />} type="primary" />
          <Button onClick={() => handleDelete(record)} icon={<MdDelete />} type="primary" danger />
        </div>
      ),
    },
  ];

  const dataSource = todo.map((item, index) => ({
    key: index || "",
    index: index || "",
    serialNumber: index + 1 || "",
    todo: item || "",
  }));

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
}
export default TodoTable;
