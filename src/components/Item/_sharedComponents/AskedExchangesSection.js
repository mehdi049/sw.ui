import React from "react";
import { Badge, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faClock, faCoins } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AskedExchangesSection() {
  return (
    <Row>
      <Col>
        <h3>Demandes d'échange</h3>
        <Row>
          {[...Array(4)].map((x, i) => (
            <React.Fragment key={i}>
              <Col xs={4} lg={2} className="exchange-items">
                <Link to="/item">
                  <div
                    className="item-img-container-sm"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../images/uploads/item1.png") +
                        ")",
                    }}
                  ></div>
                </Link>
              </Col>
              <Col xs={8} lg={4} className="exchange-items">
                <Badge className="green2-bg">Eléctronique</Badge>&nbsp;
                <span className="small">
                  Par Ahmed | <FontAwesomeIcon icon={faClock} /> 22 Aout 2020 |
                  &nbsp;
                  <FontAwesomeIcon icon={faComment} /> 15
                </span>
                <p>
                  <span className="bold blue">Samsung galaxi s20</span>
                  <span className="price-info blue">
                    <FontAwesomeIcon icon={faCoins} /> 350 TND
                  </span>
                </p>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default AskedExchangesSection;
