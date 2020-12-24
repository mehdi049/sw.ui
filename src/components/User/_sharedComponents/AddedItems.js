import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faClock, faComment } from "@fortawesome/free-solid-svg-icons";

function AddedItems() {
  return (
    <>
      <h3>Articles ajoutés</h3>
      {[...Array(4)].map((x, i) => (
        <Link key={i} to="/" className="dash-separation added-item-link">
          <Row>
            <Col lg={3}>
              <div className="item-img-container-sm">
                <span class="helper"></span>
                <img
                  src={require("../../../images/uploads/item1-1.png")}
                  className="item-img"
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <p className="bold blue">Samsung galaxi s20</p>
              <span className="small gray">
                <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 | &nbsp;&nbsp;
                <FontAwesomeIcon icon={faComment} /> 15
              </span>
            </Col>
          </Row>
        </Link>
      ))}
      <br />
      <Link to="/my-items" className="blue">
        Afficher tous
      </Link>
    </>
  );
}

export default AddedItems;
