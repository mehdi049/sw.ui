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
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Logo from "../images/logo.png";

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
                  title="Bonjour Mehdi"
                  id="basic-nav-dropdown"
                >
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Profile
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Mes articles
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Péferences
                    </button>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/">
                    <button className="dropdown-item" href="#">
                      Se deconnecter
                    </button>
                  </Link>
                </NavDropdown>
              </Navbar.Collapse>
            </Navbar>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row>
          <Navbar style={{ width: "100%" }}>
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="" height={35} />
            </Link>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id={"top-search-section"}>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faSearch} className="white" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" />
                </InputGroup>
              </Nav>
              <Nav.Link href="#">
                <Button variant="primary">Se connecter</Button>
              </Nav.Link>
              <Nav.Link href="#">
                <Button variant="primary">Créer une annonce</Button>
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </>
  );
}

export default Header;
