import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faClock,
  faCoins,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-js-pagination";
import SortDropdown from "../_sharedComponents/SortDropdown";

function HomeItems() {
  const [activePage, setActivePage] = useState(1);

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={6} lg={8} xl={9}>
            <br />
            <br />
            <h3>Annonces à la une</h3>
          </Col>
          <Col>
            <br />
            <SortDropdown itemCount={false} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Row>
              {[...Array(8)].map((x, i) => (
                <React.Fragment key={i}>
                  <Col xs={6} md={4} lg={3}>
                    <Link to="/item">
                      <div
                        className="item-img-container-lg"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("../../images/uploads/item1-3.png") +
                            ")",
                        }}
                      ></div>
                      <span className="item-name">Samsung galaxi s20</span>
                      <Badge className="green2-bg">Electronique</Badge>{" "}
                      <span className="small">
                        Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout
                        2020 | <FontAwesomeIcon icon={faComment} /> 15
                      </span>
                      <span className="price-info blue">
                        <FontAwesomeIcon icon={faCoins} /> 350 TND &nbsp;&nbsp;
                        &nbsp;
                        <span className="d-block d-md-inline">
                          <FontAwesomeIcon icon={faExchangeAlt} />
                          &nbsp; Echange
                        </span>
                      </span>
                      <p className="item-description">
                        With our Guaranteed buy-back offer, we'll cover up to
                        50% of the retail price [...]
                      </p>
                    </Link>
                  </Col>
                  <Col xs={6} md={4} lg={3}>
                    <Link to="/item">
                      <div
                        className="item-img-container-lg"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("../../images/uploads/item1-6.png") +
                            ")",
                        }}
                      ></div>
                      <span className="item-name">Samsung galaxi s20</span>
                      <Badge className="green2-bg">Electronique</Badge>{" "}
                      <span className="small">
                        Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout
                        2020 | <FontAwesomeIcon icon={faComment} /> 15
                      </span>
                      <span className="price-info blue">
                        <FontAwesomeIcon icon={faCoins} /> 350 TND
                      </span>
                      <p className="item-description">
                        With our Guaranteed buy-back offer, we'll cover up to
                        50% of the retail price [...]
                      </p>
                    </Link>
                  </Col>
                  <Col xs={6} md={4} lg={3}>
                    <Link to="/item">
                      <div
                        className="item-img-container-lg"
                        style={{
                          backgroundImage:
                            "url(" +
                            require("../../images/uploads/item1-5.png") +
                            ")",
                        }}
                      ></div>
                      <span className="item-name">Samsung galaxi s20</span>
                      <Badge className="green2-bg">Electronique</Badge>{" "}
                      <span className="small">
                        Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout
                        2020 | <FontAwesomeIcon icon={faComment} /> 15
                      </span>
                      <span className="price-info blue">
                        &nbsp;
                        <FontAwesomeIcon icon={faExchangeAlt} />
                        &nbsp; Echange
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
              itemClass="page-item"
              linkClass="page-link"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeItems;
