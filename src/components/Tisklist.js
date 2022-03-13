import React from "react";
import { post } from "axios";
import { Badge, Toast, ToastHeader, ToastBody } from "react-bootstrap";
import Form from "../components/Forms";

function Tisklist({ task, fetchData }) {
  const deletUserData = (id) => {
    console.log(id);
    const formData = new FormData();
    formData.append("taskid", id);
    const url = "https://devza.com/tests/tasks/delete";
    const config = {
      headers: {
        AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
        "content-type": "multipart/form-data",
      },
    };
    post(url, formData, config)
      .then((res) => {
        alert(JSON.stringify(res.data.message));
      })
      .catch((err) => console.log(err));
    fetchData();
  };

  return (
    <div>
      <Toast onClick={() => deletUserData(task.id)} className="">
        <ToastHeader
          icon="primary  "
          className="d-flex justify-content-between"
        >
          <Badge pill>
            {task.priority === "1" ? "H" : task.priority === "2" ? "M" : "L"}
          </Badge>
          <small className="text-muted">
            {new Date(task.due_date).toLocaleDateString()}
          </small>
        </ToastHeader>

        <ToastBody>{task.message}</ToastBody>
        <div className="text-center">
          <Form />
        </div>
      </Toast>
    </div>
  );
}

export default Tisklist;
