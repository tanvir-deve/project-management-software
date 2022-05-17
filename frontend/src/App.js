import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity from "./Components/Activity";
import DailyClass from "./Components/DailyClass";
import EmployList from "./Components/EmployList";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Row>
          <Col lg={3}>
            <Navbar />
          </Col>
          <Col lg={9}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/emploay" element={<EmployList />} />
              <Route path="/todayclass" element={<DailyClass />} />
              <Route path="/postactivity" element={<Activity />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </>
  );
}

export default App;
