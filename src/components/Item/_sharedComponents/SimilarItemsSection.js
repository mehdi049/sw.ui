import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faComment,
  faCoins,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SimilarItemsSection() {
  return (
    <>
      <h3>Articles similaire</h3>
      {[...Array(4)].map((x, i) => (
        <Link key={i} to="/" className="dash-separation added-item-link">
          <Row>
            <Col md={4} xl={3}>
              <div
                className="item-img-container-sm"
                style={{
                  backgroundImage:
                    "url(" +
                    require("../../../images/uploads/item1-1.png") +
                    ")",
                }}
              ></div>
            </Col>
            <Col>
              <p className="bold blue">Samsung galaxi s20</p>
              <span className="small">
                <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 | &nbsp;&nbsp;
                <FontAwesomeIcon icon={faComment} /> 15
              </span>
              <span className="price-info blue">
                <FontAwesomeIcon icon={faCoins} /> 350 TND &nbsp;&nbsp;
                <span className="d-block d-xl-inline">
                  <FontAwesomeIcon icon={faExchangeAlt} />
                  &nbsp; Echange
                </span>
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

export default SimilarItemsSection;
