import React from "react";
import { Badge, Row, Col, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Link } from "react-router-dom";

function AskedExchangesSection(props) {
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

  if (props.itemsForExchange !== null && props.itemsForExchange.length > 0)
    return (
      <Row>
        <Col>
          <h3>{props.itemsForExchange.length} demande(s) d'échange(s)</h3>
          <br />
          <Row>
            {props.itemsForExchange.map((x, i) => (
              <React.Fragment key={i}>
                <Col xs={4} lg={2} className="exchange-items">
                  <Link
                    to={"/item/" + x.itemsToExchange[0].item.id}
                    onClick={() =>
                      props.itemOnClick(x.itemsToExchange[0].item.id)
                    }
                  >
                    {validateImage(
                      x.itemsToExchange[0].item.images.split(";")[0]
                    )}
                  </Link>
                </Col>
                <Col xs={8} lg={4} className="exchange-items">
                  <Badge className="bg-3">
                    {x.itemsToExchange[0].item.subCategory.category.name}
                  </Badge>
                  &nbsp;
                  <span className="small">
                    {/* Par {x.itemsToExchange[0].user.firstname} |{" "}  */}
                    <FontAwesomeIcon icon={faClock} />{" "}
                    {format(new Date(x.exchangeRequestTime), "dd MMMM yyyy", {
                      locale: fr,
                    })}{" "}
                  </span>
                  <p>
                    <span className="bold blue">
                      {x.itemsToExchange[0].item.title}
                    </span>
                  </p>
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Col>
      </Row>
    );
  else
    return (
      <Row>
        <Col>
          <Alert variant="info">
            Aucune demande d'échange pour cet article.
          </Alert>
        </Col>
      </Row>
    );
}

export default AskedExchangesSection;
