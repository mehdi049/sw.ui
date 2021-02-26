import React, { useEffect, useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Image,
} from "react-bootstrap";
import CityDropDown from "../_sharedComponents/DropDowns/CityDropDown";
import FileUpload from "../_sharedComponents/FileUpload";
import ProfileInfo from "./_sharedComponents/ProfileInfo";
import { toast } from "react-toastify";
import * as api from "./api/UserApi";

function Profile() {
  const [btnSubmitLoading, setBtnSubmitLoading] = useState(false);
  const [imgPreview, setImgPreview] = useState();

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  function checkUpdateProfileModel() {
    let emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    let _error = "";
    if (userInfo.firstName === "")
      _error += "<p>&bull; Le champ 'Prénom' est obligatoire.</p>";
    if (userInfo.lastName === "")
      _error += "<p>&bull; Le champ 'Nom' est obligatoire.</p>";
    if (userInfo.phoneNumber === "")
      _error += "<p>&bull; Le champ 'Num télephone' est obligatoire.</p>";
    if (userInfo.city === "")
      _error += "<p>&bull; Le champ 'Cité' est obligatoire.</p>";
    if (userInfo.region === "")
      _error += "<p>&bull; Le champ 'Region' est obligatoire.</p>";
    if (userInfo.email === "")
      _error += "<p>&bull; Le champ 'Email' est obligatoire.</p>";
    if (userInfo.email.length > 0 && emailReg.test(userInfo.email) === false)
      _error += "<p>&bull; Adresse e-mail invalide.</p>";

    if (_error.length > 0) {
      const Msg = () => <div dangerouslySetInnerHTML={{ __html: _error }} />;
      toast.error(<Msg />);
    }
    return _error;
  }

  function handleUserChange(event) {
    const _userInfoUser = {
      ...userInfo,
      [event.target.name]: event.target.value,
    };
    if (event.target.name === "city") _userInfoUser.region = "";

    setUserInfo(_userInfoUser);
  }

  function handlePreferenceChange(event) {
    const _userInfoPreference = {
      ...userInfo.preference,
      [event.target.name]: event.target.value === "true",
    };

    const _userInfoUser = { ...userInfo };
    _userInfoUser.preference = _userInfoPreference;

    setUserInfo(_userInfoUser);
  }

  function handleUserImageChange(event) {
    setImgPreview(URL.createObjectURL(event.target.files[0]));
  }

  function handleUserUpdateSubmit() {
    if (checkUpdateProfileModel().length > 0) return;

    setBtnSubmitLoading(true);
    api
      .updateUser(userInfo)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Votre profile a été modifié avec succès.");
          localStorage.setItem("user", JSON.stringify(userInfo));
        } else toast.error(res.message);

        setBtnSubmitLoading(false);
      })
      .catch((e) => {
        setBtnSubmitLoading(false);
        toast.error("Une erreur s'est produite, veuillez réessayer.");
      });
  }

  useEffect(() => {
    console.log(userInfo);
  }, []);

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col xs={12} sm={4} md={3}>
            <ProfileInfo />
          </Col>
          <Col xs={12} sm={8} lg={6}>
            <br className="d-block d-sm-none" />
            <h3>Mon compte</h3>
            <Form>
              <Form.Group>
                <Form.Label>
                  {imgPreview == null && (
                    <img
                      src={require("../../images/avatars/" + userInfo.picture)}
                      alt={userInfo.firstName}
                      className="img-rounded"
                      width="50"
                    />
                  )}
                  {imgPreview != null && (
                    <Image
                      src={imgPreview}
                      className="img-rounded"
                      width="50"
                      height="50"
                    />
                  )}
                </Form.Label>
                <br />
                <FileUpload onChange={handleUserImageChange} />
              </Form.Group>

              <Form.Group>
                <Form.Label className="dark-blue">Nom</Form.Label>
                <Form.Control
                  type="text"
                  value={userInfo.lastName}
                  name="lastName"
                  onChange={handleUserChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="dark-blue">Prénom</Form.Label>
                <Form.Control
                  type="text"
                  value={userInfo.firstName}
                  name="firstName"
                  onChange={handleUserChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Email</Form.Label>
                <Form.Control
                  type="text"
                  value={userInfo.email}
                  name="email"
                  onChange={handleUserChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Num. Téléphone</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={userInfo.phoneNumber}
                  onChange={handleUserChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Sexe</Form.Label>
                <br />
                <Form.Check
                  type="radio"
                  label="Homme"
                  checked={userInfo.gender === "m"}
                  onChange={handleUserChange}
                  name="gender"
                  value="m"
                  style={{ display: "inline" }}
                />
                &nbsp; &nbsp; &nbsp;
                <Form.Check
                  type="radio"
                  label="Femme"
                  name="gender"
                  value="f"
                  checked={userInfo.gender === "f"}
                  onChange={handleUserChange}
                  style={{ display: "inline" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Adresse</Form.Label>
                <CityDropDown
                  onCityChange={handleUserChange}
                  onRegionChange={handleUserChange}
                  cityValue={userInfo.city}
                  regionValue={userInfo.region}
                />
              </Form.Group>
              <div className="text-right">
                <Button
                  variant="primary"
                  type="button"
                  onClick={handleUserUpdateSubmit}
                >
                  {btnSubmitLoading && (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}{" "}
                  Valider
                </Button>
              </div>
            </Form>
            <br />
          </Col>
          <Col lg={3} className="d-none d-lg-block">
            <h3>Mes préferences</h3>
            <Form>
              <Form.Group>
                <Form.Label className="dark-blue">
                  Afficher mon numéro de télephone
                </Form.Label>
                <Form.Check
                  type="radio"
                  label="Oui"
                  checked={userInfo.preference.displayPhoneNumber === true}
                  onChange={handlePreferenceChange}
                  name="displayPhoneNumber"
                  value={true}
                />
                <Form.Check
                  type="radio"
                  label="Non"
                  name="displayPhoneNumber"
                  checked={userInfo.preference.displayPhoneNumber === false}
                  onChange={handlePreferenceChange}
                  value={false}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="dark-blue">
                  Recevoir des notification sur les nouveaux articles
                </Form.Label>
                <Form.Check
                  type="radio"
                  label="Oui"
                  checked={
                    userInfo.preference.receiveNotificationNewArticle === true
                  }
                  name="receiveNotificationNewArticle"
                  onChange={handlePreferenceChange}
                  value={true}
                />
                <Form.Check
                  type="radio"
                  label="Non"
                  checked={
                    userInfo.preference.receiveNotificationNewArticle === false
                  }
                  name="receiveNotificationNewArticle"
                  onChange={handlePreferenceChange}
                  value={false}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">
                  Recevoir des notifications par email
                </Form.Label>
                <Form.Check
                  type="radio"
                  label="Oui"
                  checked={userInfo.preference.receiveEmail === true}
                  name="receiveEmail"
                  onChange={handlePreferenceChange}
                  value={true}
                />
                <Form.Check
                  type="radio"
                  label="Non"
                  name="receiveEmail"
                  checked={userInfo.preference.receiveEmail === false}
                  onChange={handlePreferenceChange}
                  value={false}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
