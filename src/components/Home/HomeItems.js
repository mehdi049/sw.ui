import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Link } from "react-router-dom";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faClock,
  faCoins,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-js-pagination";
import SortDropdown from "../_sharedComponents/SortDropdown";
import * as api from "./api/ItemApi";

function HomeItems() {
  const [items, setItems] = useState([]);
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [contentLoaded, setContentLoaded] = useState(false);

  const [activePage, setActivePage] = useState(1);

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
    const pStart = (pageNumber - 1) * 20;
    setPaginatedItems(items.slice(pStart, pStart + 20));
  }

  function validateImage(imgPath) {
    console.log(imgPath);
    try {
      return (
        <div
          className="item-img-container-lg"
          style={{
            backgroundImage:
              "url(" +
              require(process.env.REACT_APP_ITEM_UPLOAD_PATH + imgPath) +
              ")",
          }}
        ></div>
      );
    } catch (err) {
      return (
        <div
          className="item-img-container-lg"
          style={{
            backgroundImage: "url(/images/not-available.jpg)",
          }}
        ></div>
      );
    }
  }

  useEffect(() => {
    api.getHomeItems().then((res) => {
      console.log(res.body);
      setItems(res.body);
      setPaginatedItems(res.body.slice(0, 20));
      setContentLoaded(true);
    });
  }, []);

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
      {contentLoaded && (
        <Container>
          <Row>
            <Col>
              <Row>
                {paginatedItems.map((x, i) => (
                  <React.Fragment key={i}>
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <Link to={"/item/" + x.id}>
                        {validateImage(x.images.split(";")[0])}
                        <span className="item-name">{x.title}</span>
                        <Badge className={"bg-" + x.subCategory.category.id}>
                          {x.subCategory.category.name}
                        </Badge>{" "}
                        <span className="small">
                          Par Mehdi | <FontAwesomeIcon icon={faClock} />{" "}
                          {format(new Date(x.addedTime), "dd MMMM yyyy", {
                            locale: fr,
                          })}{" "}
                          | <FontAwesomeIcon icon={faComment} />{" "}
                          {x.itemFeedbacks.length}
                        </span>
                        <span className="price-info blue">
                          {x.price && x.price !== 0 && (
                            <>
                              {" "}
                              <FontAwesomeIcon icon={faCoins} /> {x.price} TND
                              &nbsp;&nbsp; &nbsp;
                            </>
                          )}
                          {x.exchange && (
                            <>
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              &nbsp; Echange
                            </>
                          )}
                        </span>
                        <p className="item-description d-none d-lg-block">
                          {x.description.substr(0, 100)} [...]
                        </p>
                        <br className="d-block d-lg-none" />
                        <br className="d-block d-lg-none" />
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
                itemsCountPerPage={20}
                totalItemsCount={items.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange.bind(this)}
                itemClass="page-item"
                linkClass="page-link"
              />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default HomeItems;
