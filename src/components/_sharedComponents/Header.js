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
  Button,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faEnvelope,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../images/logo.png";

function Header() {
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <>
      <Container fluid={true} className="dark-blue-bg">
        <Container>
          <Row>
            <Navbar style={{ width: "100%" }}>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      A props de nous
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contacter nous
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/help">
                      Aide
                    </Link>
                  </li>
                </Nav>
              </Navbar.Collapse>
              {isAuthenticated && (
                <Navbar.Collapse className="justify-content-end">
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
          <Col lg={3}>
            {!isAuthenticated && (
              <>
                <Button
                  variant="primary"
                  onClick={() => loginWithRedirect()}
                  className="btn btn-primary"
                >
                  Se connecter
                </Button>
                &nbsp;
              </>
            )}
            <Link to="/add-item" className="btn btn-primary">
              Créer une annonce
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
