import React, { useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import Tisklist from "./Tisklist";
import Froms from "./Forms";
function Userlist({ id, name, picture, task, openForm, closeFrom, fetchData }) {
  const arr = task.filter((x) => {
    return (
      x.assigned_to === id && x.priority <= 3 && x.priority >= 0
      // x.due_date < "01 / 01 / 2022"
    );
  });

  const [msgData, setMsgData] = useState("");

  const handleClick = (msg) => {
    console.log(msgData);
    setMsgData(msg);
  };

  return (
    <>
      <Card key={id} style={{ width: "25rem", margin: "3px", padding: "10px" }}>
        <Card.Img
          variant="top"
          id={id}
          src={picture}
          onerror="this.src='https://www.unesale.com/ProductImages/Large/notfound.png'"
          alt=""
        />

        <Card.Body>
          <Card.Title className="text-center pb-2">{name}</Card.Title>

          {arr.map((msg, id) => (
            <ListGroup
              className={`p-3 my-2  ${
                msg.assigned_to === "1"
                  ? "bg-primary"
                  : msg.assigned_to === "2"
                  ? " bg-secondary"
                  : msg.assigned_to === "3"
                  ? " bg-success"
                  : msg.assigned_to === "4"
                  ? " bg-info"
                  : msg.assigned_to === "5"
                  ? " bg-dark"
                  : " bg-danger "
              } rounded bg-docs-transparent-grid`}
            >
              <div>
                <Tisklist
                  key={id}
                  task={msg}
                  openForm={openForm}
                  fetchData={fetchData}
                ></Tisklist>
                <div className="text-center">
                  <Button
                    className="align-center mt-2"
                    variant="light"
                    onClick={() => {
                      handleClick(msg);
                      openForm();
                    }}
                  >
                    Edit
                  </Button>
                  <Froms
                    openForm={openForm}
                    closeFrom={closeFrom}
                    fetchData={fetchData}
                    msg={msgData}
                    text={"add"}
                  />
                </div>
              </div>
            </ListGroup>
          ))}
        </Card.Body>
      </Card>
    </>
  );
}
export default Userlist;
