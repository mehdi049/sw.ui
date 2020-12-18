import React from "react";
import { Link } from "react-router-dom";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faClock } from "@fortawesome/free-solid-svg-icons";
import HeaderCategories from "./_sharedComponents/HeaderCategories";
import LeftSideFilter from "./LeftSideFilter";

function CategoryItems() {
  return (
    <>
      <HeaderCategories />
      <br />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftSideFilter />
          </Col>
          <Col>
            <Row>
              <Col xs={12}>
                Véhicules > Tous
                <br />
                <br />
              </Col>

              {[...Array(8)].map((x, i) => (
                <Col lg={4} key={i}>
                  <Link to="/item">
                    <img
                      src={require("../images/uploads/item1.png")}
                      className="item-img"
                      alt=""
                    />
                    <h4>Samsung galaxi s20</h4>
                    <Badge className="green2-bg">Electronique</Badge>{" "}
                    <span className="small gray">
                      Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout
                      2020 | <FontAwesomeIcon icon={faComment} /> 15
                    </span>
                    <p className="gray item-description">
                      With our Guaranteed buy-back offer, we'll cover up to 50%
                      of the retail price [...]
                    </p>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoryItems;
