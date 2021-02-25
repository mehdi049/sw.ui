import React, { useState } from "react";
import { Col, Form, Row, Button, Modal, Spinner } from "react-bootstrap";
import CityDropDown from "../DropDowns/CityDropDown";
import { toast } from "react-toastify";
import * as api from "./api/loginApi";

function LoginForm(props) {
  const [btnLoginLoading, setBtnLoginLoading] = useState(false);
  const [btnRegisterLoading, setBtnRegisterLoading] = useState(false);

  const [displayLogin, setDisplayLogin] = useState(true);
  const [registerModel, setRegisterModel] = useState({
    firstName: "",
    lastName: "",
    gender: "m",
    phone: "",
    city: "",
    region: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginModel, setLoginModel] = useState({
    email: "mehdi.marouani@gmail.com",
    password: "123456",
    rememberMe: false,
  });

  function handleRegisterChange(event) {
    const _registerModel = {
      ...registerModel,
      [event.target.name]: event.target.value,
    };
    setRegisterModel(_registerModel);
  }

  function checkRegisterModel() {
    let emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    let _error = "";
    if (registerModel.firstName === "")
      _error += "<p>&bull; Le champ 'Prénom' est obligatoire.</p>";
    if (registerModel.lastName === "")
      _error += "<p>&bull; Le champ 'Nom' est obligatoire.</p>";
    if (registerModel.phone === "")
      _error += "<p>&bull; Le champ 'Num télephone' est obligatoire.</p>";
    if (registerModel.city === "")
      _error += "<p>&bull; Le champ 'Cité' est obligatoire.</p>";
    if (registerModel.region === "")
      _error += "<p>&bull; Le champ 'Region' est obligatoire.</p>";
    if (registerModel.email === "")
      _error += "<p>&bull; Le champ 'Email' est obligatoire.</p>";
    if (
      registerModel.email.length > 0 &&
      emailReg.test(registerModel.email) === false
    )
      _error += "<p>&bull; Adresse e-mail invalide.</p>";
    if (registerModel.password === "")
      _error += "<p>&bull; Le champ 'Mot de passe' est obligatoire.</p>";
    if (registerModel.password !== "" && registerModel.password.length < 6)
      _error +=
        "<p>&bull; Les mots de passe doivent comporter au moins 6 caractères.</p>";

    if (registerModel.confirmPassword === "")
      _error +=
        "<p>&bull; Le champ 'Confirmer mot de passe' est obligatoire.</p>";
    if (
      registerModel.confirmPassword !== "" &&
      registerModel.password !== "" &&
      registerModel.confirmPassword !== registerModel.password
    )
      _error +=
        "<p>Le 'mot de passe' et 'le mot de passe de confirmation' ne correspondent pas.</p>";

    if (_error.length > 0) {
      const Msg = () => <div dangerouslySetInnerHTML={{ __html: _error }} />;
      toast.error(<Msg />);
    }
    return _error;
  }

  function handleLoginChange(event) {
    const _loginModel = {
      ...loginModel,
      [event.target.name]: event.target.value,
    };
    setLoginModel(_loginModel);
  }

  function submitRegister() {
    if (checkRegisterModel().length > 0) return;

    setBtnRegisterLoading(true);
    api
      .register(registerModel)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Votre compte a été créé avec succès.");
          setLoginModel({
            email: registerModel.email,
            password: registerModel.password,
          });
          setRegisterModel({
            firstName: "",
            lastName: "",
            gender: "m",
            phone: "",
            city: "",
            region: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setDisplayLogin(true);
        } else toast.error(res.message);

        setBtnRegisterLoading(false);
      })
      .catch((e) => {
        setBtnRegisterLoading(false);
        toast.error("Une erreur s'est produite, veuillez réessayer.");
      });
  }

  function checkLoginModel() {
    let emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    let _error = "";
    if (loginModel.email === "")
      _error += "<p>&bull; Le champ 'Email' est obligatoire.</p>";

    if (
      loginModel.email.length > 0 &&
      emailReg.test(loginModel.email) === false
    )
      _error += "<p>&bull; Adresse e-mail invalide.</p>";

    if (loginModel.password === "")
      _error += "<p>&bull; Le champ 'Mot de passe' est obligatoire.</p>";

    if (_error.length > 0) {
      const Msg = () => <div dangerouslySetInnerHTML={{ __html: _error }} />;
      toast.error(<Msg />);
    }
    return _error;
  }

  function submitLogin() {
    if (checkLoginModel().length > 0) return;

    setBtnLoginLoading(true);
    api
      .login(loginModel)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.body.token);
          api
            .getUser(loginModel.email)
            .then((getUserRes) => {
              if (getUserRes.status === 200) {
                localStorage.setItem("user", JSON.stringify(getUserRes.body));
                props.onLogin(true);
              } else {
                localStorage.removeItem("token");
                toast.error(res.message);
              }
            })
            .catch((e) => {
              setBtnLoginLoading(false);
              toast.error("Une erreur s'est produite, veuillez réessayer.");
            });
        } else toast.error(res.message);

        setBtnLoginLoading(false);
      })
      .catch((e) => {
        setBtnLoginLoading(false);
        toast.error("Une erreur s'est produite, veuillez réessayer.");
      });
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title className="dark-blue">
          {displayLogin ? <> Se connecter </> : <>Créer un compte </>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {displayLogin ? (
          <>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleLoginChange}
                value={loginModel.email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                name="password"
                onChange={handleLoginChange}
                value={loginModel.password}
              />
            </Form.Group>
            <Form.Group as={Row}>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Se souvenir de moi"
                  value={true}
                  onChange={handleLoginChange}
                  checked={loginModel.rememberMe}
                />
              </Col>
              <Col className="text-right">
                <Button variant="primary" onClick={submitLogin}>
                  {btnLoginLoading && (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  Se connecter
                </Button>
              </Col>
            </Form.Group>

            <p
              className="blue pointer underline"
              onClick={() => setDisplayLogin(false)}
            >
              Créer un compte
            </p>
          </>
        ) : (
          <>
            <Form.Group>
              <Form.Control
                type="text"
                value={registerModel.lastName}
                onChange={handleRegisterChange}
                placeholder="Nom"
                name="lastName"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                value={registerModel.firstName}
                onChange={handleRegisterChange}
                placeholder="Prénom"
                name="firstName"
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                defaultChecked={registerModel.gender === "m"}
                onChange={handleRegisterChange}
                label="Homme"
                name="gender"
                value="m"
                style={{ display: "inline" }}
              />
              &nbsp; &nbsp; &nbsp;
              <Form.Check
                type="radio"
                defaultChecked={registerModel.gender === "f"}
                onChange={handleRegisterChange}
                label="Femme"
                name="gender"
                value="f"
                style={{ display: "inline" }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                value={registerModel.phone}
                onChange={handleRegisterChange}
                placeholder="Num télephone"
                name="phone"
              />
            </Form.Group>
            <Form.Group>
              <CityDropDown
                choose={true}
                cityValue={registerModel.city}
                onCityChange={handleRegisterChange}
                onRegionChange={handleRegisterChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                value={registerModel.email}
                onChange={handleRegisterChange}
                placeholder="Email"
                name="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                value={registerModel.password}
                onChange={handleRegisterChange}
                placeholder="Mot de passe"
                name="password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                value={registerModel.confirmPassword}
                onChange={handleRegisterChange}
                placeholder="Confirmer mot de passe"
                name="confirmPassword"
              />
            </Form.Group>
            <Form.Group className="text-right">
              <Button variant="primary" onClick={submitRegister}>
                {btnRegisterLoading && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                Valider
              </Button>
            </Form.Group>
            <p
              className="blue pointer underline"
              onClick={() => setDisplayLogin(true)}
            >
              Se connecter
            </p>
          </>
        )}
      </Modal.Body>
    </>
  );
}

export default LoginForm;
