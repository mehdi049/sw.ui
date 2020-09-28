import React from "react";
import Toast from "react-bootstrap/Toast";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCheckCircle,
  faExclamationTriangle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

function ToastMessage(props) {
  return (
    <Toast
      show={props.show}
      onClose={props.onClose}
      className={
        props.type === "warning"
          ? "toast-warning"
          : props.type === "success"
          ? "toast-success"
          : "toast-danger"
      }
      delay={8000}
      autohide
    >
      <Toast.Header>
        <strong className="mr-auto"></strong>
      </Toast.Header>
      <Toast.Body>
        <Row>
          <Col lg={1}>
            <p>
              {props.type === "success" ? (
                <FontAwesomeIcon icon={faCheckCircle} />
              ) : props.type === "warning" ? (
                <FontAwesomeIcon icon={faExclamationTriangle} />
              ) : (
                <FontAwesomeIcon icon={faExclamationCircle} />
              )}
            </p>
          </Col>
          <Col>
            <span dangerouslySetInnerHTML={{ __html: props.message }} />
          </Col>
        </Row>
      </Toast.Body>
    </Toast>
  );
}

ToastMessage.propTypes = {
  delay: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  toastHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
export default ToastMessage;
