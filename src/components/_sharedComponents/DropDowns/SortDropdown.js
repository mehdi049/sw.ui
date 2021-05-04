import React from "react";
import { Col, Row, Form } from "react-bootstrap";

function SortDropdown(props) {
  return (
    <Form>
      <Form.Group as={Row}>
        <Col className="text-right">
          {props.itemCount ? (
            <span className="bold small blue">
              {" "}
              {props.itemCount} articles{" "}
            </span>
          ) : (
            <br />
          )}
          <Form.Control
            as="select"
            className="select"
            name="item-sort"
            onChange={props.onChange}
          >
            {/*<option>Trié par pertinence</option>*/}
            <option value="newest">Trié par le plus recent</option>
            <option value="hPrice">Trié par prix le plus élevé</option>
            <option value="lPrice">Trié par prix le plus bas</option>
          </Form.Control>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default SortDropdown;
