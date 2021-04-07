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
import Error from "../_sharedComponents/Error";

function HomeItems() {
  const [isError, setIsError] = useState(false);

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

  function sortItems(event) {
    let _items = { ...items };
    if (event.target.value === "newest")
      _items = items.sort((a, b) =>
        a.item.addedTime < b.item.addedTime ? 1 : -1
      );
    if (event.target.value === "hPrice")
      _items = items.sort((a, b) => (a.item.price < b.item.price ? 1 : -1));
    if (event.target.value === "lPrice")
      _items = items.sort((a, b) => (a.item.price > b.item.price ? 1 : -1));

    setItems(_items);
    handlePageChange(1);
  }

  useEffect(() => {
    api
      .getHomeItems()
      .then((res) => {
        setIsError(false);
        setItems(res.body);
        setPaginatedItems(res.body.slice(0, 20));
        setContentLoaded(true);
      })
      .catch((error) => {
        setIsError(true);
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
            <SortDropdown itemCount={false} onChange={sortItems} />
          </Col>
        </Row>
      </Container>
      {contentLoaded && (
        <Container>
          <Row>
            <Col>
              <Row>
                {paginatedItems.map((x, i) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={i}>
                    <Link to={"/item/" + x.item.id}>
                      {validateImage(x.item.images.split(";")[0])}
                      <span className="item-name">{x.item.title}</span>
                      <Badge className={"bg-" + x.item.subCategory.category.id}>
                        {x.item.subCategory.category.name}
                      </Badge>{" "}
                      <span className="small">
                        Par {x.user.firstName} |{" "}
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {format(new Date(x.item.addedTime), "dd MMMM yyyy", {
                          locale: fr,
                        })}{" "}
                        | <FontAwesomeIcon icon={faComment} />{" "}
                        {x.item.itemFeedbacks.length}
                      </span>
                      <span className="price-info blue">
                        {x.item.price && x.item.price !== 0 && (
                          <>
                            {" "}
                            <FontAwesomeIcon icon={faCoins} /> {x.item.price}{" "}
                            TND &nbsp;&nbsp; &nbsp;
                          </>
                        )}
                        {x.item.exchange && (
                          <>
                            <FontAwesomeIcon icon={faExchangeAlt} />
                            &nbsp; Echange
                          </>
                        )}
                      </span>
                      <p className="item-description d-none d-lg-block">
                        {x.item.description.substr(0, 100)} [...]
                      </p>
                      <br className="d-block d-lg-none" />
                      <br className="d-block d-lg-none" />
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

      {isError && <Error />}
    </>
  );
}

export default HomeItems;
