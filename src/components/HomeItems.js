import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faClock } from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-js-pagination";

function HomeItems() {
  const [activePage, setActivePage] = useState(1);

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
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
            <br />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Row>
              {[...Array(16)].map((x, i) => (
                <Col lg={3} key={i}>
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
