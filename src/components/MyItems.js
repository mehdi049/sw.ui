import React from "react";
import { Table, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faInfoCircle,
  faClock,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MyItems() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <h3>Mes articles</h3>
            <Table striped bordered responsive id="my-item-table">
              <thead>
                <tr>
                  <th>Article</th>
                  <th>Demandes d'échange</th>
                  <th style={{ width: 100 }}></th>
                </tr>
              </thead>
              <tbody>
                {[...Array(8)].map((x, i) => (
                  <tr key={i}>
                    <td>
                      <div className="item-img-container-md text-left">
                        <span class="helper"></span>
                        {[...Array(5)].map((x, j) => (
                          <img
                            key={j}
                            src={require("../images/uploads/item1-1.png")}
                            className={
                              j === 0 ? " item-img item-img-first " : "item-img"
                            }
                            alt=""
                          />
                        ))}
                      </div>
                      <Badge className="green2-bg">Eléctronique</Badge>
                      <span className="small gray">
                        &nbsp;&nbsp; <FontAwesomeIcon icon={faClock} /> 22 Aout
                        2020 | &nbsp;
                        <FontAwesomeIcon icon={faComment} /> 15
                      </span>
                      <p>
                        <span className="bold blue">Samsung galaxi s20</span>
                        <br />
                        With our Guaranteed buy-back offer, we'll cover up to
                        50% [...]
                      </p>
                    </td>
                    <td>
                      {[...Array(2)].map((x, j) => (
                        <div key={j} className="dash-separation">
                          <Badge className="green2-bg">Eléctronique</Badge>
                          &nbsp;
                          <span className="small gray">
                            Par Ahmed | <FontAwesomeIcon icon={faClock} /> 22
                            Aout 2020
                          </span>
                          <Link to="/item" className="blue exchange-item-list">
                            Iphone 10
                          </Link>
                        </div>
                      ))}
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="blue pointer"
                      />
                      &nbsp;|&nbsp;
                      <FontAwesomeIcon icon={faEdit} className="blue pointer" />
                      &nbsp;|&nbsp;
                      <Link to="/item">
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          className="blue pointer"
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyItems;
