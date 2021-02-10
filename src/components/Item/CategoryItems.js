import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faClock,
  faFilter,
  faCoins,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import HeaderCategories from "../_sharedComponents/HeaderCategories";
import LeftSideFilter from "./_sharedComponents/LeftSideFilter";
import Pagination from "react-js-pagination";
import SortDropdown from "../_sharedComponents/SortDropdown";

function CategoryItems() {
  const [activePage, setActivePage] = useState(1);
  const [activeMenu, setActiveMenu] = useState(false);

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
  }

  return (
    <>
      <HeaderCategories />
      <br />
      <Container>
        <Row>
          <Col className="d-none d-md-block" md={3}>
            <LeftSideFilter />
          </Col>
          <Col md={9}>
            <Row>
              <Col xs={12} md={7} xl={8}>
                <br className="d-none d-sm-block" />
                <span className="blue">Eléctronique</span> > Tous
                <br />
                <br className="d-none d-md-block" />
                <div
                  className="d-block d-md-none"
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  <br />
                  <p className="pointer category-filter-bar">
                    <FontAwesomeIcon icon={faFilter} /> &nbsp; Filtrer
                  </p>
                  {activeMenu && <LeftSideFilter />}
                </div>
              </Col>
              <Col>
                <SortDropdown itemCount={true} />
              </Col>
            </Row>
            <Row>
              {[...Array(3)].map((x, i) => (
                <Col xs={6} sm={6} lg={4} key={i}>
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
                      <span className="d-block d-sm-inline">
                        <FontAwesomeIcon icon={faExchangeAlt} />
                        &nbsp; Echange
                      </span>
                    </span>
                    <p className="item-description">
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
