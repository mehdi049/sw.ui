import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Button,
  Form,
  InputGroup,
  Badge,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faEnvelope,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../images/logo.png";

function Header() {
  return (
    <>
      <Container fluid={true} className="dark-blue-bg">
        <Container>
          <Row>
            <Navbar style={{ width: "100%" }}>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      A props de nous
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Contacter nous
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Aide
                    </Link>
                  </li>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <NavDropdown
                  className="profile-links"
                  title={
                    <>
                      <img
                        src={require("../../images/avatars/128_1.png")}
                        height={30}
                        alt=""
                      />
                      &nbsp;&nbsp; Mehdi
                    </>
                  }
                  id="basic-nav-dropdown"
                >
                  <Link to="/profile">
                    <button className="dropdown-item" href="#">
                      Profile
                    </button>
                  </Link>
                  <Link to="/myItems">
                    <button className="dropdown-item" href="#">
                      Mes articles
                    </button>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Se deconnecter
                    </button>
                  </Link>
                </NavDropdown>
                <NavDropdown
                  className="profile-links no-carret"
                  title={
                    <>
                      <FontAwesomeIcon icon={faEnvelope} className="white" />
                      <Badge className="notif-badge">13</Badge>
                    </>
                  }
                  id="basic-nav-dropdown"
                >
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Ahmed vous a envoyé un message
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Sofien vous a envoyé un message
                    </button>
                  </Link>
                </NavDropdown>
                <NavDropdown
                  className="profile-links no-carret"
                  title={
                    <>
                      <FontAwesomeIcon icon={faBell} className="white" />
                      <Badge className="notif-badge">3</Badge>
                    </>
                  }
                  id="basic-nav-dropdown"
                >
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Ahmed a aimé votre article
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Sofien a aimé votre article
                    </button>
                  </Link>
                </NavDropdown>
                <NavDropdown
                  className="profile-links no-carret"
                  title={
                    <>
                      <FontAwesomeIcon icon={faExchangeAlt} className="white" />
                      <Badge className="notif-badge">3</Badge>
                    </>
                  }
                  id="basic-nav-dropdown"
                >
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Ahmed veut echanger un article avec vous
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Sofien veut echanger un article avec vous
                    </button>
                  </Link>
                </NavDropdown>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Container>
      </Container>
      <br />
      <Container>
        <Row>
          <Col lg={1}>
            <Link to="/">
              <img src={Logo} alt="" height={35} />
            </Link>
          </Col>
          <Col id={"top-search-section"}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} className="white" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" />
            </InputGroup>
          </Col>
          <Col lg={2}>
            <Link to="/" className="btn btn-primary">
              Se connecter
            </Link>
          </Col>
          <Col lg={2}>
            <Link to="/" className="btn btn-primary">
              Créer une annonce
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
