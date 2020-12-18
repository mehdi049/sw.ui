import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function BottomHeaderMenu() {
  const [activeCat, setActiveCat] = useState("");

  function setActive(name) {
    setActiveCat(name);
  }

  return (
    <Container fluid={true} style={{ background: "#203040" }}>
      <Container>
        <Row style={{ width: "1100px" }}>
          <Col
            className="bottom-header-menu-item"
            active={activeCat === "vehicule" ? "true" : "false"}
            onClick={() => setActive("vehicule")}
          >
            <Link to="/category">Véhicules</Link>
          </Col>
          <Col
            className="bottom-header-menu-item"
            active={activeCat === "leiure" ? "true" : "false"}
            onClick={() => setActive("leiure")}
          >
            <Link to="/category">Loisirs</Link>
          </Col>
          <Col
            className="bottom-header-menu-item"
            active={activeCat === "electronic" ? "true" : "false"}
            onClick={() => setActive("electronic")}
          >
            <Link to="/category">Electronique</Link>
          </Col>
          <Col
            className="bottom-header-menu-item"
            active={activeCat === "home" ? "true" : "false"}
            onClick={() => setActive("home")}
          >
            <Link to="/category">Maison et jardin</Link>
          </Col>
          <Col
            className="bottom-header-menu-item"
            active={activeCat === "clothes" ? "true" : "false"}
            onClick={() => setActive("clothes")}
          >
            <Link to="/category">Habillement</Link>
          </Col>
          <Col
            className="bottom-header-menu-item"
            active={activeCat === "games" ? "true" : "false"}
            onClick={() => setActive("games")}
          >
            <Link to="/category">Jeux video</Link>
          </Col>
          <Col
            className="bottom-header-menu-item"
            active={activeCat === "books" ? "true" : "false"}
            onClick={() => setActive("books")}
          >
            <Link to="/category">Livres</Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BottomHeaderMenu;
