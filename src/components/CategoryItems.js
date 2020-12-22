import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faClock } from "@fortawesome/free-solid-svg-icons";
import HeaderCategories from "./_sharedComponents/HeaderCategories";
import LeftSideFilter from "./LeftSideFilter";
import Pagination from "react-js-pagination";

function CategoryItems() {
  const [activePage, setActivePage] = useState(1);

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
  }

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
                <span className="blue">Eléctronique</span> > Tous
                <br />
                <br />
              </Col>

              {[...Array(8)].map((x, i) => (
                <Col xs={6} sm={4} key={i}>
                  <Link to="/item">
                    <div class="item-img-container-lg">
                      <span class="helper"></span>
                      <img
                        src={require("../images/uploads/item1.png")}
                        className="item-img"
                        alt=""
                      />
                    </div>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoryItems;
