import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Badge, Row, Col, Form, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Redirect } from "react-router-dom";
import {
  faExchangeAlt,
  faCheckCircle,
  faTimesCircle,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import * as api from "../api/ItemApi";
import Pagination from "react-js-pagination";
import Error from "../../_sharedComponents/Error";

function ReceivedExchanges() {
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const [isError, setIsError] = useState(false);

  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState(false);

  const [paginatedItems, setPaginatedItems] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (userInfo.id) {
      loadMyExchanges();
    }
  }, []);

  function loadMyExchanges() {
    api
      .myExchanges(userInfo.id)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.body);
          setItems(res.body);
          setPaginatedItems(res.body.slice(0, 5));
          setDisplayItems(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
    const pStart = (pageNumber - 1) * 5;
    setPaginatedItems(items.slice(pStart, pStart + 5));
  }

  function validateImage(imgPath) {
    try {
      return (
        <div
          className="item-img-container-sm"
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
          className="item-img-container-sm"
          style={{
            backgroundImage: "url(/images/not-available.jpg)",
            backgroundSize: "cover",
          }}
        ></div>
      );
    }
  }

  if (userInfo === null) return <Redirect to="/" />;

  return (
    <>
      {isError ? (
        <Error />
      ) : (
        <>
          {items.length > 0 ? (
            <>
              <Row>
                <Col xs={6} sm={7} md={8} xl={9}>
                  <h4>{items.length} demandes d'échanges reçus</h4>
                  <br />
                </Col>
                <Col xs={6} sm={5} md={4} xl={3}>
                  <Form.Group>
                    <Form.Control as="select">
                      <option>En cours</option>
                      <option>Accepté</option>
                      <option>Annulé</option>
                    </Form.Control>
                  </Form.Group>
                  <br />
                </Col>
              </Row>
              {items.map((x, i) => (
                <div key={i} className="exchange-list">
                  <Row>
                    <Col xs={4}>
                      <Row>
                        <Col lg={3}>
                          <Link to={"/item/" + x.item.id}>
                            {validateImage(x.item.images.split(";")[0])}
                          </Link>
                        </Col>
                        <Col>
                          <Badge
                            className={"bg-" + x.item.subCategory.category.id}
                          >
                            {x.item.subCategory.category.name}
                          </Badge>
                          <p>
                            <span className="bold blue">{x.item.title}</span>
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={2} sm={1}>
                      <FontAwesomeIcon
                        icon={faExchangeAlt}
                        className="blue exchange-icon"
                        size="2x"
                      />
                    </Col>
                    <Col xs={4}>
                      {x.item.itemExchanges.map((y, j) => (
                        <Row key={j}>
                          <Col xs={12}>
                            <span className="small d-block">
                              Par{" "}
                              {y.itemsToExchange[0].user.firstName +
                                " " +
                                y.itemsToExchange[0].user.lastName}{" "}
                              &nbsp;&nbsp;
                              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                              {y.itemsToExchange[0].user.city +
                                ", " +
                                y.itemsToExchange[0].user.region}
                              <br /> <FontAwesomeIcon icon={faClock} />{" "}
                              {format(
                                new Date(y.exchangeRequestTime),
                                "dd MMMM yyyy hh:mm",
                                {
                                  locale: fr,
                                }
                              )}
                            </span>
                            <br />
                          </Col>
                          {y.itemsToExchange.map((z, k) => (
                            <Col key={k}>
                              <Row>
                                <Col xs={12}>
                                  <Link to={"/item/" + z.item.id}>
                                    {validateImage(z.item.images.split(";")[0])}
                                  </Link>
                                </Col>
                                <Col xs={12}>
                                  <p>
                                    <span className="bold blue">
                                      {z.item.title}
                                    </span>
                                  </p>
                                </Col>
                              </Row>
                              <br />
                            </Col>
                          ))}
                        </Row>
                      ))}
                    </Col>
                    <Col xs={1} sm={2}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="blue pointer"
                        size="2x"
                      />
                      &nbsp; <span className="d-none d-md-inline">&nbsp;</span>
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="blue pointer"
                        size="2x"
                      />
                    </Col>
                  </Row>
                </div>
              ))}
            </>
          ) : (
            displayItems && (
              <Alert variant="info">Aucune demande d'échanges.</Alert>
            )
          )}
        </>
      )}
    </>
  );
}

export default ReceivedExchanges;
