import React, { useEffect, useState } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuData from "../MenuData";

const Navbar = () => {
  return (
    <>
      <Tab.Container>
        <Row>
          <div style={{ width: "300px" }}>
            <Nav variant="pills" className="flex-column">
              {MenuData.map((item) => (
                <Link className="navLink" to={`/${item.slug}`}>
                  <Nav.Link eventKey="first">{item.name}</Nav.Link>
                </Link>
              ))}
            </Nav>
          </div>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Navbar;
