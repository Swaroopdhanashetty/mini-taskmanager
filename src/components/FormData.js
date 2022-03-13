import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
function FormData({
  open,
  closeForm,
  listUser,
  handleSubmit,
  message,
  setMessage,
  due,
  setDue,
  priority,
  assigned_to,
  setAssigned_to,
  setPriority,
  text,
}) {
  return (
    <>
      <Modal show={open} onHide={closeForm} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{text == "add" ? "" : "Add the new User"}</Modal.Title>
        </Modal.Header>
        <Form className="p-3 ">
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              type="text"
              placeholder="Message"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              value={due}
              onChange={(event) => setDue(event.target.value)}
              type="date"
              placeholder="Date"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              type="number"
              placeholder="number"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Assigned To</Form.Label>
            <Form.Select
              size="md"
              value={assigned_to}
              onChange={(event) => setAssigned_to(event.target.value)}
            >
              {listUser.map((x, id) => (
                <option key={id} value={x.id}>
                  {x.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default FormData;
