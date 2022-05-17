import React, { useEffect, useState } from "react";
import { Row, Form, Button, Col, Table } from "react-bootstrap";
import axios from "axios";

const Activity = () => {
  const [data, setdata] = useState([]);
  let [activityName, setActivityName] = useState("");
  let [hour, setHour] = useState("");
  let [details, setDetails] = useState("");

  useEffect(() => {
    const emploayeeData = async () => {
      let { data } = await axios.get("http://localhost:8000/activity");
      setdata(data);
    };
    emploayeeData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/activity", {
        activityName,
        hour,
        details,
      })
      .then(() => {
        setActivityName("");
        setHour("");
        setDetails("");
      });
  };

  return (
    <div>
      <Row>
        <Col className="mx-auto mt-4" lg={11}>
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setActivityName(e.target.value)}
                    value={activityName}
                    type="text"
                    placeholder="Activity Name"
                  />
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setHour(e.target.value)}
                    value={hour}
                    type="text"
                    placeholder="Hour Take"
                  />
                </Form.Group>
              </Col>

              <Col lg={12} className="activity_details">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}
                    type="text"
                    placeholder="Details Activity"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button onClick={handleSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={11}>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Activity Name </th>
                <th>Hour Take</th>
                <th>Detils</th>
              </tr>
            </thead>
            {data.map((item) => (
              <tbody>
                <tr>
                  <td>{item.activityName}</td>
                  <td>{item.hour}</td>
                  <td>{item.details}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Activity;
