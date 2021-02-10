import React from "react";
import { Col, Row, Form } from "react-bootstrap";

function SortDropdown(props) {
  return (
    <Form>
      <Form.Group as={Row}>
        <Col className="text-right">
          {props.itemCount ? (
            <span className="bold small blue"> 1 880 articles </span>
          ) : (
            <br />
          )}
          <Form.Control as="select" className="select">
            <option>Trié par pertinence</option>
            <option>Trié par le plus recent</option>
            <option>Trié par prix le plus élevé</option>
            <option>Trié par prix le plus bas</option>
          </Form.Control>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default SortDropdown;
