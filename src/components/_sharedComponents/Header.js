import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Form,
  InputGroup,
  Badge,
  Modal,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faEnvelope,
  faExchangeAlt,
  faSignInAlt,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/logo-white.png";
import LoginForm from "./LoginForm/LoginForm";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("user") !== null
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setShow(false);
  }

  return (
    <>
      <Container fluid={true} id="header-section" className="dark-blue-bg">
        <Container>
          <Row>
            <Navbar style={{ width: "100%" }}>
              <Link to="/">
                <Navbar.Brand>
                  <img src={Logo} alt="" id="logo" />
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <InputGroup id={"top-search-section"}>
                  <Form.Control type="text" />
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faSearch} className="white" />
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Navbar.Collapse>
              {isAuthenticated && (
                <Navbar.Collapse className="justify-content-end">
                  <Link className="nav-link d-none d-md-block" to="/add-item">
                    <FontAwesomeIcon icon={faArrowCircleUp} className="white" />
                    &nbsp; Créer une annonce
                  </Link>
                  <NavDropdown
                    className="profile-links"
                    title={
                      <img
                        src={require("../../images/avatars/default_m.png")}
                        alt="mehdi"
                        className="img-rounded"
                        id="logo"
                      />
                    }
                  >
                    <div className="d-block d-md-none">
                      <Link to="/add-item">
                        <button className="dropdown-item">
                          Créer une annonce
                        </button>
                      </Link>
                      <NavDropdown.Divider />
                    </div>
                    <Link to="/profile">
                      <button className="dropdown-item">Profile</button>
                    </Link>
                    <Link to="/my-items">
                      <button className="dropdown-item">Mes articles</button>
                    </Link>
                    <div className="d-md-block d-lg-none">
                      <Link to="/messages">
                        <button className="dropdown-item">Messages (13)</button>
                      </Link>
                      <Link to="/notifications">
                        <button className="dropdown-item">
                          Notifications (3)
                        </button>
                      </Link>
                      <Link to="/exchanges">
                        <button className="dropdown-item">
                          Demande d'échange (13)
                        </button>
                      </Link>
                    </div>
                    <NavDropdown.Divider />
                    <Link to="/">
                      <button className="dropdown-item" onClick={logOut}>
                        Se deconnecter
                      </button>
                    </Link>
                  </NavDropdown>
                  <Link className="nav-link d-none d-lg-block" to="/messages">
                    <FontAwesomeIcon icon={faEnvelope} className="white" />
                    <Badge className="notif-badge">13</Badge>
                  </Link>
                  <div id="notif-dropdown" className="d-none d-lg-block">
                    <NavDropdown
                      className="profile-links no-carret"
                      title={
                        <>
                          <FontAwesomeIcon icon={faBell} className="white" />
                          <Badge className="notif-badge">3</Badge>
                        </>
                      }
                    >
                      <Link to="/notifications">
                        <button className="dropdown-item" href="#">
                          <img
                            src={require("../../images/avatars/default_m.png")}
                            height={30}
                            alt=""
                          />
                          &nbsp;&nbsp;{" "}
                          <span className="bold dark-blue">Ahmed</span> a aimé
                          votre article
                        </button>
                      </Link>
                      <Link to="/notifications">
                        <button className="dropdown-item" href="#">
                          <img
                            src={require("../../images/avatars/128_2.png")}
                            height={30}
                            alt=""
                          />
                          &nbsp;&nbsp;{" "}
                          <span className="bold dark-blue">Sofien</span> a
                          commenté votre article
                        </button>
                      </Link>
                      <NavDropdown.Divider />
                      <Link to="/notifications">
                        <button className="dropdown-item" href="#">
                          Voir tout
                        </button>
                      </Link>
                    </NavDropdown>
                  </div>
                  <Link className="nav-link d-none d-lg-block" to="/exchanges">
                    <FontAwesomeIcon icon={faExchangeAlt} className="white" />
                    <Badge className="notif-badge">13</Badge>
                  </Link>
                </Navbar.Collapse>
              )}
              {!isAuthenticated && (
                <>
                  <Navbar.Collapse className="justify-content-end">
                    <Nav.Link
                      className="nav-link d-none d-lg-block"
                      href="#"
                      onClick={handleShow}
                    >
                      <FontAwesomeIcon
                        icon={faArrowCircleUp}
                        className="white"
                      />
                      &nbsp; Créer une annonce
                    </Nav.Link>
                    <Nav.Link
                      className="nav-link"
                      href="#"
                      onClick={handleShow}
                    >
                      <FontAwesomeIcon icon={faSignInAlt} className="white" />
                      &nbsp; Se connecter
                    </Nav.Link>
                  </Navbar.Collapse>

                  <Modal show={show} onHide={handleClose}>
                    <LoginForm onLogin={setIsAuthenticated} />
                  </Modal>
                </>
              )}
            </Navbar>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Header;
