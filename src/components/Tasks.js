import data from "../data.json";
import React from "react";
import TodoList from "./TodoList";
import { Table } from "react-bootstrap";
export default function Tasks() {
  const [task, setTask] = React.useState(data);
  return (
    <>
      <h1>Tasks Page </h1>
      <Table>
        <thead>
          <tr>
            <th> Id </th>
            <th> Task </th>
            <th> Status </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {task.map((row) => (
            <TodoList task={row} />
          ))}
        </tbody>
      </Table>
    </>
  );
}
