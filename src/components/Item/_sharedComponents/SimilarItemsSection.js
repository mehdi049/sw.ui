import React from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faComment,
  faCoins,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SimilarItemsSection(props) {
  console.log(props.similarItems);
  function validateImage(imgPath, className) {
    try {
      return (
        <div
          className={className}
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
          className={className}
          style={{
            backgroundImage: "url(/images/not-available.jpg)",
          }}
        ></div>
      );
    }
  }

  return (
    <>
      <h3>Articles similaires</h3>
      {props.similarItems.slice(0, 4).map((x) => (
        <Link
          key={x.item.id}
          to={"/item/" + x.item.id}
          className="dash-separation added-item-link"
        >
          <Row>
            <Col md={4} xl={3}>
              {validateImage(
                x.item.images.split(";")[0],
                "item-img-container-sm"
              )}
            </Col>
            <Col>
              <p className="bold blue" style={{ wordBreak: "break-word" }}>
                {x.item.title}
              </p>
              <span className="small">
                Par {x.user.firstName} | <FontAwesomeIcon icon={faClock} />{" "}
                {format(new Date(x.item.addedTime), "dd MMMM yyyy", {
                  locale: fr,
                })}
              </span>
              <span className="price-info blue">
                {x.item.price && x.item.price !== 0 && (
                  <>
                    {" "}
                    <FontAwesomeIcon icon={faCoins} /> {x.item.price} TND
                    &nbsp;&nbsp;
                  </>
                )}
                <span className="d-block d-xl-inline">
                  {x.item.exchange && (
                    <>
                      <FontAwesomeIcon icon={faExchangeAlt} />
                      &nbsp; Echange
                    </>
                  )}
                </span>
              </span>
            </Col>
          </Row>
        </Link>
      ))}
      {/*  <br />
      <Link to="/my-items" className="blue">
        Afficher tous
      </Link>
      */}
    </>
  );
}

export default SimilarItemsSection;
