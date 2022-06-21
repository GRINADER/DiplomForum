import React from "react";
import { Button, Form, Placeholder } from "react-bootstrap";

export const Crud = () => {
    return(
        <>
        <Form className="ms-3 me-3">
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className="mt-2 mb-2">Изменить название темы</Form.Label>
    <Form.Control type="email"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Изменить название темы</Form.Label>
    <Form.Control as="textarea" rows={3} />
    <Button className="mt-2 mb-2">Сохранить</Button>
  </Form.Group>
</Form>
        </>
    )
}