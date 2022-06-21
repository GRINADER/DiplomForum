import React, { useState } from "react";
import { Navbar, Nav, Button, Form, Modal, Popover, OverlayTrigger, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-Link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;


const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Держи ключ!</Popover.Header>
    <Popover.Body>
      <strong>3546346534563</strong>
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button size="sm" variant="success" >Получи ключ к игре !</Button>
  </OverlayTrigger>
);

export default function NaviBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect bg="dark" variant="dark">
          <Navbar.Brand className="ms-2">Goo breakout</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              
              <Example/>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/news">News</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/users">Forum</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="/crud">CRUD</Link>
              </Nav.Link> */}
            </Nav>
            <Nav>
              <Button variant="primary" className="me-2" onClick={handleShow}>
                Log in
              </Button>
              {/* <Button variant="primary" className="me-2" onClick={handleShow}>
                Sign out
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"> NEVER SAY IT </Form.Text>
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId="fromBasicChecbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Form.Group>
              <Button>Войти</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
