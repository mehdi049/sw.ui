import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import * as api from "./api/CategoryApi";

function HeaderCategories(props) {
  const [activeCat, setActiveCat] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);
  const [categories, setCategories] = useState([]);

  function setActive(id) {
    setActiveCat(id);
    if (props.handleCategoryChange) props.handleCategoryChange(id);
  }

  useEffect(() => {
    api.getCategories().then((res) => {
      setCategories(res.body);
    });
  }, []);

  return (
    <Container fluid={true} style={{ background: "#203040" }}>
      <Container>
        <Row>
          <Col className="top-main-catagtory-item d-block d-md-none">
            <a href="#" onClick={() => setActiveMenu(true)}>
              <FontAwesomeIcon icon={faBars} /> &nbsp; Tout
            </a>
          </Col>
          {categories &&
            categories.map((x) => {
              return (
                <Col
                  key={x.id}
                  className="top-main-catagtory-item"
                  active={activeCat === x.id ? "true" : "false"}
                  onClick={() => setActive(x.id)}
                >
                  <Link to={"/category/" + x.id}>{x.name}</Link>
                </Col>
              );
            })}
        </Row>

        {activeMenu && (
          <div id="left-category-menu" className={"d-block d-md-none"}>
            <FontAwesomeIcon
              icon={faTimes}
              id="close-menu"
              onClick={() => setActiveMenu(false)}
            />
            {categories &&
              categories.map((x) => {
                return (
                  <Link
                    key={x.id}
                    to={"/category/" + x.id}
                    active={activeCat === x.id ? "true" : "false"}
                    onClick={() => setActive(x.id)}
                    className="left-category-menu-first"
                  >
                    {x.name}
                  </Link>
                );
              })}
          </div>
        )}
      </Container>
    </Container>
  );
}

export default HeaderCategories;
