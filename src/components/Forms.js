import React, { useState } from "react";
import { post } from "axios";
import Formdata from "./FormData";

function Forms({ open, closeForm, listUser, fetchData, text, msg }) {
  const [message, setMessage] = useState("");
  console.log(message);
  const [due, setDue] = useState("");
  console.log(due);
  const [priority, setPriority] = useState("");
  console.log(priority);
  const [assigned_to, setAssigned_to] = useState("");
  console.log(assigned_to);
  console.log(msg);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("message", message);
    formData.append("due_date", due);
    formData.append("priority", priority);
    formData.append("assigned_to", assigned_to);

    const url = "https://devza.com/tests/tasks/create";
    const config = {
      headers: {
        AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
        "content-type": "multipart/form-data",
      },
    };
    post(url, formData, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setMessage("");
    setDue("");
    setPriority("");
    setAssigned_to("");
    closeForm();
    fetchData();
  };
  return (
    <>
      {(() => {
        if (open === true) {
          if (msg !== "") {
            return (
              <Formdata
                open={open}
                closeForm={closeForm}
                listUser={listUser}
                handleSubmit={handleSubmit}
                message={message}
                setMessage={setMessage}
                due={due}
                setDue={setDue}
                priority={priority}
                assigned_to={assigned_to}
                setAssigned_to={setAssigned_to}
                setPriority={setPriority}
                text={text}
              />
            );
          }
          return (
            <Formdata
              open={open}
              closeForm={closeForm}
              listUser={listUser}
              handleSubmit={handleSubmit}
              message={message}
              setMessage={setMessage}
              due={due}
              setDue={setDue}
              priority={priority}
              assigned_to={assigned_to}
              setAssigned_to={setAssigned_to}
              setPriority={setPriority}
              text={text}
            />
          );
        }
      })()}
      {/* {open === true ? (
        <>
          <Formdata
            open={open}
            closeForm={closeForm}
            listUser={listUser}
            handleSubmit={handleSubmit}
            message={message}
            setMessage={setMessage}
            due={due}
            setDue={setDue}
            priority={priority}
            assigned_to={assigned_to}
            setAssigned_to={setAssigned_to}
            setPriority={setPriority}
            text={text}
          />
        </>
      ) : msg === "" ? (
        <h1>Swaroop</h1>
      ) : (
        ""
      )} */}
    </>
  );
}

export default Forms;
