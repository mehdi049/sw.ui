import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function LastArticlesCarousel() {
  let state = {
    galleryItems: [
      <div className="last-item">
        <Link to="/item">
          <img
            src={require("../images/uploads/item1.png")}
            className="item-img"
            alt=""
          />
          <h4>Samsung galaxi s20</h4>
          <Badge className="green2-bg">Electronique</Badge>{" "}
          <span className="small">
            Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
        </Link>
      </div>,
      <div className="last-item">
        <Link to="/item">
          <img
            src={require("../images/uploads/item1.png")}
            className="item-img"
            alt=""
          />
          <h4>Samsung galaxi s20</h4>
          <Badge className="green2-bg">Electronique</Badge>{" "}
          <span className="small">
            Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
        </Link>
      </div>,
      <div className="last-item">
        <Link to="/item">
          <img
            src={require("../images/uploads/item1.png")}
            className="item-img"
            alt=""
          />
          <h4>Samsung galaxi s20</h4>
          <Badge className="green2-bg">Electronique</Badge>{" "}
          <span className="small">
            Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
        </Link>
      </div>,
      <div className="last-item">
        <Link to="/item">
          <img
            src={require("../images/uploads/item1.png")}
            className="item-img"
            alt=""
          />
          <h4>Samsung galaxi s20</h4>
          <Badge className="green2-bg">Electronique</Badge>{" "}
          <span className="small">
            Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
        </Link>
      </div>,
      <div className="last-item">
        <Link to="/item">
          <img
            src={require("../images/uploads/item1.png")}
            className="item-img"
            alt=""
          />
          <h4>Samsung galaxi s20</h4>
          <Badge className="green2-bg">Electronique</Badge>{" "}
          <span className="small">
            Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
        </Link>
      </div>,
      <div className="last-item">
        <Link to="/item">
          <img
            src={require("../images/uploads/item1.png")}
            className="item-img"
            alt=""
          />
          <h4>Samsung galaxi s20</h4>
          <Badge className="green2-bg">Electronique</Badge>{" "}
          <span className="small">
            Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
        </Link>
      </div>,
      <div className="last-item">
        <Link to="/item">
          <img
            src={require("../images/uploads/item1.png")}
            className="item-img"
            alt=""
          />
          <h4>Samsung galaxi s20</h4>
          <Badge className="green2-bg">Electronique</Badge>{" "}
          <span className="small">
            Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
        </Link>
      </div>,
      <div className="last-item">
        <Link to="/item">
          <img
            src={require("../images/uploads/item1.png")}
            className="item-img"
            alt=""
          />
          <h4>Samsung galaxi s20</h4>
          <Badge className="green2-bg">Electronique</Badge>{" "}
          <span className="small">
            Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
        </Link>
      </div>,
      <div className="last-item">
        <Link to="/item">
          <img
            src={require("../images/uploads/item1.png")}
            className="item-img"
            alt=""
          />
          <h4>Samsung galaxi s20</h4>
          <Badge className="green2-bg">Electronique</Badge>{" "}
          <span className="small">
            Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
        </Link>
      </div>,
      <div className="last-item">
        <Link to="/item">
          <img
            src={require("../images/uploads/item1.png")}
            className="item-img"
            alt=""
          />
          <h4>Samsung galaxi s20</h4>
          <Badge className="green2-bg">Electronique</Badge>{" "}
          <span className="small">
            Par Mehdi | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |{" "}
            <FontAwesomeIcon icon={faComment} /> 15
          </span>
        </Link>
      </div>,
    ].map((i) => <div key={i}>{i}</div>),
  };

  let responsive = {
    0: { items: 1 },
    1024: { items: 4 },
  };

  return (
    <Container fluid={true} id="last-articles-section">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center dark-gray">Derniers articles</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <AliceCarousel
              items={state.galleryItems}
              responsive={responsive}
              autoPlayInterval={3000}
              autoPlayDirection="rtl"
              autoPlay={true}
              fadeOutAnimation={true}
              mouseTrackingEnabled={true}
              disableAutoPlayOnAction={true}
              buttonsDisabled={true}
              swipeDisabled={false}
            ></AliceCarousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LastArticlesCarousel;
