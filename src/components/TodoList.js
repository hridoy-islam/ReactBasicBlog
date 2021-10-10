import { Button } from "react-bootstrap";

export default function TodoList({ task }) {
  return (
    <>
      <tr>
        <td> {task.id} </td>
        <td> {task.task} </td>
        <td>
          <b className={task.complete ? "bg-primary" : "bg-danger"}>
            {" "}
            {task.complete ? "complete" : "Due"}{" "}
          </b>{" "}
        </td>
        <td>
          {" "}
          <Button variant={task.complete ? "success" : "warning"}>
            {" "}
            {task.complete ? "Do Again" : "Done"}{" "}
          </Button>{" "}
        </td>
      </tr>
    </>
  );
}
