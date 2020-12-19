import React from "react";
import { Form, Badge, Container, Row, Col, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faClock,
  faPhoneAlt,
  faMapMarker,
  faEye,
  faExchangeAlt,
  faHeart,
  faSyncAlt,
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import HeaderCategories from "./_sharedComponents/HeaderCategories";
import SimilarArticlesCarousel from "./SimilarArticlesCarousel";
import { Link } from "react-router-dom";

function Item() {
  return (
    <>
      <HeaderCategories />
      <br />
      <Container>
        <Row>
          <Col>
            <span className="blue">Eléctronique</span> >{" "}
            <span className="blue">Portable</span> > Samsung galaxi s20
            <br />
          </Col>
        </Row>
        <Row>
          <Col lg={9}>
            <Row>
              <Col lg="10">
                <h4>Samsung galaxi s20</h4>
                <Badge className="green2-bg">Electronique</Badge>{" "}
                <span className="small gray">
                  Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
                  <FontAwesomeIcon icon={faComment} /> 15
                </span>
              </Col>
              <Col>
                <br />
                <FontAwesomeIcon
                  icon={faHeart}
                  className="pointer icon-large"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon
                  icon={faExchangeAlt}
                  className="pointer blue icon-large"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg="6" className="padding-right-5">
                <img
                  src={require("../images/uploads/item1.png")}
                  className="main-detail-img"
                  alt=""
                />
              </Col>
              <Col lg="6">
                <Row>
                  <Col lg="6" className="padding-left-5 padding-right-5">
                    <img
                      src={require("../images/uploads/item1-1.png")}
                      className="main-detail-img-small"
                      alt=""
                    />
                  </Col>
                  <Col lg="6" className="padding-left-5">
                    <img
                      src={require("../images/uploads/item1-2.png")}
                      className="main-detail-img-small"
                      alt=""
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="6" className="padding-left-5 padding-right-5">
                    <img
                      src={require("../images/uploads/item1-3.png")}
                      className="main-detail-img-small"
                      alt=""
                    />
                  </Col>
                  <Col lg="6" className="padding-left-5">
                    <img
                      src={require("../images/uploads/item1-4.png")}
                      className="main-detail-img-small"
                      alt=""
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <p className="item-description">
                  Power of 5G: Get next-level power for everything you love to
                  do with Samsung Galaxy 5G; Share more, game harder, experience
                  more and never miss a beat <br />
                  Single Take AI: Capture video and multiple types of images
                  with one tap of the shutter button; Lenses, effects and
                  filters capture the best of every moment, every time <br />
                  Hi-Res Camera Zoom: Capture hi-res images as if you’re 3 feet
                  away, from 100 feet away; Whether you want to zoom in close
                  from afar or magnify details nearby, the new 30x Space Zoom
                  gives you impressive power and clarity <br />
                  Bright Night Mode: Capture crisp images and vibrant video in
                  Bright Night mode and create high-quality content in low light
                  – no flash needed <br />
                  Super Fast Charging: Charge up quicker with Super Fast Charge
                  so you can keep moving with more juice; Give your buds – or
                  Galaxy buds – a boost of power with Wireless PowerShare right
                  from Galaxy S20 5G All-Day Battery: Galaxy S20 5G’s
                  intelligent battery uses an algorithm to learn from how you
                  live to optimize power and take you through a day or more of
                  work and life without ever giving out on you <br />
                  Massive Storage: Generous storage out of the box and
                  expandable memory means you never have to delete what’s
                  important to you; Memory card sold separately
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Demandes d'échange</h3>
                <Row>
                  {[...Array(4)].map((x, i) => (
                    <React.Fragment key={i}>
                      <Col lg={2} className="exchange-items">
                        <Link to="/item">
                          <div className="item-img-container-md">
                            <span class="helper"></span>
                            <img
                              src={require("../images/uploads/item1.png")}
                              className="item-img"
                              alt=""
                            />
                          </div>
                        </Link>
                      </Col>
                      <Col lg={4} className="exchange-items">
                        <Badge className="green2-bg">Eléctronique</Badge>&nbsp;
                        <span className="small gray">
                          Par Ahmed | <FontAwesomeIcon icon={faClock} /> 22 Aout
                          2020 | &nbsp;
                          <FontAwesomeIcon icon={faComment} /> 15
                        </span>
                        <p>
                          <span className="bold blue">Samsung galaxi s20</span>
                        </p>
                      </Col>
                    </React.Fragment>
                  ))}
                </Row>
              </Col>
            </Row>
            <hr />
            <br />
            <Row>
              <Col>
                <h3>3 commentaires</h3>
              </Col>
            </Row>
            {[...Array(3)].map((x, i) => (
              <Row className="comment-section" key={i}>
                <Col lg="1">
                  <img
                    src={require("../images/avatars/128_1.png")}
                    className="comment-profile-img"
                    alt=""
                  />
                </Col>
                <Col lg="11">
                  <span className="dark-gray">Mehdi Marouani </span> |{" "}
                  <span class="small">
                    <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 15:30
                  </span>
                  <p className="comment-text">
                    Super Fast Charging: Charge up quicker with Super Fast
                    Charge so you can keep moving with more juice
                  </p>
                </Col>
              </Row>
            ))}
            <Row className="comment-section">
              <Col lg="1">
                <img
                  src={require("../images/avatars/128_1.png")}
                  className="comment-profile-img"
                  alt=""
                />
              </Col>
              <Col lg="11">
                <span className="dark-gray">Mehdi Marouani </span>
                <Form.Control as="textarea" rows="2" />
              </Col>
            </Row>
          </Col>

          <Col>
            <img
              src={require("../images/avatars/128_1.png")}
              className="comment-profile-img"
              alt=""
            />
            <br />
            <p className="dark-gray">Mehdi Marouani </p>
            <p className="">
              <FontAwesomeIcon icon={faMapMarker} className="blue" /> &nbsp;
              Bizerte, Bizerte nord
            </p>
            <p className="">
              <FontAwesomeIcon icon={faPhoneAlt} className="blue" /> &nbsp; +216
              25 447 885
            </p>
            <p className="">
              <FontAwesomeIcon icon={faExchangeAlt} className="blue" /> &nbsp; a
              échangé 8 articles
            </p>
            <br />
            <br />
            <FontAwesomeIcon icon={faEye} className="blue" />
            &nbsp;&nbsp; <span className="bold big dark-blue">118</span> fois
            <br />
            <br />
            <FontAwesomeIcon icon={faHeart} className="blue" />
            &nbsp;&nbsp; <span className="bold big dark-blue">12</span>{" "}
            personnes
            <br />
            <br />
            <FontAwesomeIcon icon={faSyncAlt} className="blue" />
            &nbsp;&nbsp; <span className="bold big dark-blue">3</span> en cours
            <br />
            <br />
            <br />
            <br />
            <h3>Articles similaire</h3>
            {[...Array(4)].map((x, i) => (
              <Link key={i} to="/" className="dash-separation added-item-link">
                <Row>
                  <Col lg={3}>
                    <div className="item-img-container-sm">
                      <span class="helper"></span>
                      <img
                        src={require("../images/uploads/item1-1.png")}
                        className="item-img"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col>
                    <p className="bold blue">Samsung galaxi s20</p>
                    <span className="small gray">
                      <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |
                      &nbsp;&nbsp;
                      <FontAwesomeIcon icon={faComment} /> 15
                    </span>
                  </Col>
                </Row>
              </Link>
            ))}
            <br />
            <Link to="/my-items" className="blue">
              Afficher tous
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Item;
