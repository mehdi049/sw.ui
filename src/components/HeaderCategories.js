import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeaderCategories() {
  const [activeCat, setActiveCat] = useState("");

  function setActive(name) {
    setActiveCat(name);
  }

  return (
    <>
      <Container>
        <Row>
          <Col
            className="top-main-catagtory-item blue-border"
            active={activeCat === "vehicule" ? "true" : "false"}
            onClick={() => setActive("vehicule")}
          >
            <Link to="/category">Véhicules</Link>
          </Col>
          <Col
            className="top-main-catagtory-item red-border"
            active={activeCat === "leiure" ? "true" : "false"}
            onClick={() => setActive("leiure")}
          >
            <Link to="/category">Loisirs</Link>
          </Col>
          <Col
            className="top-main-catagtory-item  green2-border"
            active={activeCat === "electronic" ? "true" : "false"}
            onClick={() => setActive("electronic")}
          >
            <Link to="/category">Electronique</Link>
          </Col>
          <Col
            className="top-main-catagtory-item  violet-border"
            active={activeCat === "home" ? "true" : "false"}
            onClick={() => setActive("home")}
          >
            <Link to="/category">Maison et jardin</Link>
          </Col>
          <Col
            className="top-main-catagtory-item  blue2-border"
            active={activeCat === "clothes" ? "true" : "false"}
            onClick={() => setActive("clothes")}
          >
            <Link to="/category">Habillement</Link>
          </Col>
          <Col
            className="top-main-catagtory-item  green-border"
            active={activeCat === "games" ? "true" : "false"}
            onClick={() => setActive("games")}
          >
            <Link to="/category">Jeux video</Link>
          </Col>
          <Col
            className="top-main-catagtory-item  yellow-border"
            active={activeCat === "books" ? "true" : "false"}
            onClick={() => setActive("books")}
          >
            <Link to="/category">Livres</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeaderCategories;
