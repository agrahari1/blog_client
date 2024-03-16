import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

export default function Navbarr() {
  return (
    <>
      <Navbar expand="lg" className="bg-body fixed-top contaoner ">
        <Container>
          <Navbar.Brand href="#" className="fs-1 d-flex col-4  ">
            PRASHANT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
           
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
            </Nav> */}
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2 rounded-pill shadow-lg"
                aria-label="Search"
              />
              <Button variant="outline-success rounded ml-3">
                <Link to="/signup" className="text-dark" >
                  Signup
                </Link>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
