import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function HeaderCategories() {
  const [activeCat, setActiveCat] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);

  function setActive(name) {
    setActiveCat(name);
  }

  return (
    <Container fluid={true} style={{ background: "#203040" }}>
      <Container>
        <Row>
          <Col className="top-main-catagtory-item d-block d-md-none">
            <a href="#" onClick={() => setActiveMenu(true)}>
              <FontAwesomeIcon icon={faBars} /> &nbsp; Tout
            </a>
          </Col>
          <Col
            className="top-main-catagtory-item"
            active={activeCat === "vehicule" ? "true" : "false"}
            onClick={() => setActive("vehicule")}
          >
            <Link to="/category">Véhicules</Link>
          </Col>
          <Col
            className="top-main-catagtory-item"
            active={activeCat === "entertainement" ? "true" : "false"}
            onClick={() => setActive("entertainement")}
          >
            <Link to="/category">Loisirs</Link>
          </Col>
          <Col
            className="top-main-catagtory-item"
            active={activeCat === "electronic" ? "true" : "false"}
            onClick={() => setActive("electronic")}
          >
            <Link to="/category">Eléctronique</Link>
          </Col>
          <Col
            className="top-main-catagtory-item"
            active={activeCat === "home" ? "true" : "false"}
            onClick={() => setActive("home")}
          >
            <Link to="/category">Maison et jardin</Link>
          </Col>
          <Col
            className="top-main-catagtory-item d-none d-md-block"
            active={activeCat === "clothes" ? "true" : "false"}
            onClick={() => setActive("clothes")}
          >
            <Link to="/category">Habillement</Link>
          </Col>
          <Col
            className="top-main-catagtory-item d-none d-md-block"
            active={activeCat === "games" ? "true" : "false"}
            onClick={() => setActive("games")}
          >
            <Link to="/category">Jeux video</Link>
          </Col>
          <Col
            className="top-main-catagtory-item d-none d-md-block"
            active={activeCat === "books" ? "true" : "false"}
            onClick={() => setActive("books")}
          >
            <Link to="/category">Livres</Link>
          </Col>
        </Row>

        {activeMenu && (
          <div id="left-category-menu" className={"d-block d-md-none"}>
            <FontAwesomeIcon
              icon={faTimes}
              id="close-menu"
              onClick={() => setActiveMenu(false)}
            />

            <Link
              to="/category"
              active={activeCat === "vehicule" ? "true" : "false"}
              onClick={() => setActive("vehicule")}
              className="left-category-menu-first"
            >
              Véhicules
            </Link>
            <Link
              to="/category"
              active={activeCat === "entertainement" ? "true" : "false"}
              onClick={() => setActive("entertainement")}
            >
              Loisirs
            </Link>
            <Link
              to="/category"
              active={activeCat === "electronic" ? "true" : "false"}
              onClick={() => setActive("electronic")}
            >
              Eléctronique
            </Link>
            <Link
              to="/category"
              active={activeCat === "home" ? "true" : "false"}
              onClick={() => setActive("home")}
            >
              Maison et jardin
            </Link>
            <Link
              to="/category"
              active={activeCat === "clothes" ? "true" : "false"}
              onClick={() => setActive("clothes")}
            >
              Habillement
            </Link>
            <Link
              to="/category"
              active={activeCat === "games" ? "true" : "false"}
              onClick={() => setActive("games")}
            >
              Jeux video
            </Link>
            <Link
              to="/category"
              active={activeCat === "books" ? "true" : "false"}
              onClick={() => setActive("books")}
            >
              Livres
            </Link>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default HeaderCategories;
