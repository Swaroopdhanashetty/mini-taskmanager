import { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import Form from "./components/Forms";

import "./App.css";
import Userlist from "./components/Userlist";

function App() {
  const [listUser, setListUser] = useState([]);
  console.log(listUser);
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);
  console.log(open);

  const unique = [
    ...new Set(
      taskList.map((x) =>
        JSON.stringify(
          ((o) => ({
            message: o.message,
          }))(x)
        )
      )
    ),
  ].map(JSON.parse);
  console.log(unique);

  const bodyParameter = {
    headers: { AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a" },
  };

  const fetchData = async () => {
    const userData = await axios.get(
      "https://devza.com/tests/tasks/listusers",
      bodyParameter
    );
    setListUser(userData.data.users);
    console.log(listUser);

    const taskData = await axios.get(
      "https://devza.com/tests/tasks/list",

      bodyParameter
    );
    setTaskList(taskData.data.tasks);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    // <ListContext.Provider value={taskList}>
    //Swaroop
    <div>
      <Card body className="py-5 bg-secondary text-white">
        <Button onClick={openForm} className="d-grid gap-2 col-6 mx-auto h">
          Add Task
        </Button>
        <Form
          open={open}
          closeForm={closeForm}
          listUser={listUser}
          fetchData={fetchData}
          text="New"
        />
      </Card>

      <Row className="p-5">
        {listUser.map((x, id) => (
          <Col xs={4} md={4}>
            <ul key={id}>
              <Userlist
                key={id}
                id={x.id}
                name={x.name}
                picture={x.picture}
                task={taskList}
                openForm={openForm}
                closeForm={closeForm}
                fetchData={fetchData}
              />
            </ul>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
