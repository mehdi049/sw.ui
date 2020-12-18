import React from "react";
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
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../images/logo-white.png";

function Header() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <Container fluid={true} className="dark-blue-bg">
        <Container>
          <Row>
            <Navbar style={{ width: "100%" }}>
              <Link to="/">
                <Navbar.Brand>
                  <img src={Logo} alt="" height={35} />
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
                  <Link className="nav-link" to="/add-item">
                    <FontAwesomeIcon icon={faArrowCircleUp} className="white" />
                    &nbsp; Créer une annonce
                  </Link>
                  <NavDropdown
                    className="profile-links"
                    title={
                      <>
                        <img
                          src={user.picture}
                          height={35}
                          alt={user.name}
                          className="img-rounded"
                        />
                        &nbsp;&nbsp; {user.given_name}
                      </>
                    }
                    id="basic-nav-dropdown"
                  >
                    <Link to="/profile">
                      <button className="dropdown-item">Profile</button>
                    </Link>
                    <Link to="/myItems">
                      <button className="dropdown-item">Mes articles</button>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/">
                      <button
                        className="dropdown-item"
                        onClick={() =>
                          logout({ returnTo: window.location.origin })
                        }
                      >
                        Se deconnecter
                      </button>
                    </Link>
                  </NavDropdown>
                  <Link className="nav-link" to="/messages">
                    <FontAwesomeIcon icon={faEnvelope} className="white" />
                    <Badge className="notif-badge">13</Badge>
                  </Link>
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
                    <Link to="/notifications">
                      <button className="dropdown-item" href="#">
                        <img
                          src={require("../../images/avatars/128_1.png")}
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
                  <Link className="nav-link" to="/exchanges">
                    <FontAwesomeIcon icon={faExchangeAlt} className="white" />
                    <Badge className="notif-badge">13</Badge>
                  </Link>
                </Navbar.Collapse>
              )}
              {!isAuthenticated && (
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link
                    className="nav-link"
                    href="#"
                    onClick={() => loginWithRedirect()}
                  >
                    <FontAwesomeIcon icon={faArrowCircleUp} className="white" />
                    &nbsp; Créer une annonce
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link"
                    href="#"
                    onClick={() => loginWithRedirect()}
                  >
                    <FontAwesomeIcon icon={faSignInAlt} className="white" />
                    &nbsp; Se connecter
                  </Nav.Link>
                </Navbar.Collapse>
              )}
            </Navbar>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Header;
