import React from "react";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MyItems() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>Mes article</h3>
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Titre</th>
                  <th>Description</th>
                  <th>Catégorie</th>
                  <th style={{ width: 140 }}>Publié le</th>
                  <th>Vue</th>
                  <th>Aime</th>
                  <th>Demande d'échange</th>
                  <th style={{ width: 100 }}></th>
                </tr>
              </thead>
              <tbody>
                {[...Array(8)].map((x, i) => (
                  <tr key={i}>
                    <td>
                      <img
                        src={require("../images/uploads/item1.png")}
                        height={80}
                        alt=""
                      />
                    </td>
                    <td>Samsung galaxi s20</td>
                    <td>
                      With our Guaranteed buy-back offer, we'll cover up to 50%
                      of the retail price when you return your phone in good
                      [...]
                    </td>
                    <td>Electronique</td>
                    <td>22 Aout 2020 </td>
                    <td>410 </td>
                    <td>60 </td>
                    <td>5 </td>
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
