import React, { useEffect, useState } from "react";
import { Row, Form, Button, Col, Table } from "react-bootstrap";
import axios from "axios";

const EmployList = () => {
  const [data, setdata] = useState([]);
  let [name, setName] = useState("");
  let [designation, setDesignation] = useState("");
  let [officetime, setOfficetime] = useState("");
  let [offday, setOffday] = useState("");
  let [phone, setPhone] = useState("");

  useEffect(() => {
    const emploayeeData = async () => {
      let { data } = await axios.get("http://localhost:8000/employee");
      setdata(data);
    };
    emploayeeData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/employee", {
        name,
        designation,
        officetime,
        offday,
        phone,
      })
      .then(() => {
        setName("");
        setDesignation("");
        setOfficetime("");
        setOffday("");
        setPhone("");
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
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setDesignation(e.target.value)}
                    value={designation}
                    type="text"
                    placeholder="Designation"
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setOfficetime(e.target.value)}
                    value={officetime}
                    type="text"
                    placeholder="Office Time"
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setOffday(e.target.value)}
                    value={offday}
                    type="text"
                    placeholder="Off day"
                  />
                </Form.Group>
              </Col>
              <Col lg={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="number"
                    placeholder="phone"
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
            <thead className="borderd">
              <tr>
                <th> Name </th>
                <th>Designation</th>
                <th>Office Time</th>
                <th>Off Day</th>
                <th>Phone</th>
              </tr>
            </thead>
            {data.map((item) => (
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.designation}</td>
                  <td>{item.officetime}</td>
                  <td>{item.offday}</td>
                  <td>{item.phone}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default EmployList;
