import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faClock } from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-js-pagination";

function HomeItems() {
  const [activePage, setActivePage] = useState(1);

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <h3>Annonces à la une</h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Row>
              {[...Array(8)].map((x, i) => (
                <React.Fragment key={i}>
                  <Col xs={6} sm={4} lg={3}>
                    <Link to="/item">
                      <div className="item-img-container-lg">
                        <span className="helper"></span>
                        <img
                          src={require("../../images/uploads/item1-3.png")}
                          className="item-img"
                          alt=""
                        />
                      </div>
                      <h4>Samsung galaxi s20</h4>
                      <Badge className="green2-bg">Electronique</Badge>{" "}
                      <span className="small">
                        Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout
                        2020 | <FontAwesomeIcon icon={faComment} /> 15
                      </span>
                      <p className="item-description">
                        With our Guaranteed buy-back offer, we'll cover up to
                        50% of the retail price [...]
                      </p>
                    </Link>
                  </Col>
                  <Col xs={6} sm={4} lg={3}>
                    <Link to="/item">
                      <div className="item-img-container-lg">
                        <span className="helper"></span>
                        <img
                          src={require("../../images/uploads/item1-6.png")}
                          className="item-img"
                          alt=""
                        />
                      </div>
                      <h4>Samsung galaxi s20</h4>
                      <Badge className="green2-bg">Electronique</Badge>{" "}
                      <span className="small">
                        Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout
                        2020 | <FontAwesomeIcon icon={faComment} /> 15
                      </span>
                      <p className="item-description">
                        With our Guaranteed buy-back offer, we'll cover up to
                        50% of the retail price [...]
                      </p>
                    </Link>
                  </Col>
                  <Col xs={6} sm={4} lg={3}>
                    <Link to="/item">
                      <div className="item-img-container-lg">
                        <span className="helper"></span>
                        <img
                          src={require("../../images/uploads/item1-2.png")}
                          className="item-img"
                          alt=""
                        />
                      </div>
                      <h4>Samsung galaxi s20</h4>
                      <Badge className="green2-bg">Electronique</Badge>{" "}
                      <span className="small">
                        Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout
                        2020 | <FontAwesomeIcon icon={faComment} /> 15
                      </span>
                      <p className="item-description">
                        With our Guaranteed buy-back offer, we'll cover up to
                        50% of the retail price [...]
                      </p>
                    </Link>
                  </Col>
                </React.Fragment>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={10}
              totalItemsCount={100}
              pageRangeDisplayed={5}
              onChange={handlePageChange.bind(this)}
              itemclassName="page-item"
              linkclassName="page-link"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeItems;
