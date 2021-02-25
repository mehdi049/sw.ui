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

  function handleUserChange(event) {
    const _userInfoUser = {
      ...userInfo.user,
      [event.target.name]: event.target.value,
    };
    setUserInfo({ user: _userInfoUser });
  }

  function handleIdentityChange(event) {
    const _userInfoIdentity = {
      ...userInfo.user.identity,
      [event.target.name]: event.target.value,
    };

    const _userInfoUser = { ...userInfo.user };
    _userInfoUser.identity = _userInfoIdentity;

    setUserInfo({ user: _userInfoUser });
  }

  function handlePreferenceChange(event) {
    const _userInfoPreference = {
      ...userInfo.user.preference,
      [event.target.name]: event.target.value === "true",
    };

    const _userInfoUser = { ...userInfo.user };
    _userInfoUser.preference = _userInfoPreference;

    setUserInfo({ user: _userInfoUser });
  }

  function handleUserImageChange(event) {
    setImgPreview(URL.createObjectURL(event.target.files[0]));
  }

  function handleUserUpdateSubmit() {
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
                      src={require("../../images/avatars/" +
                        userInfo.user.picture)}
                      alt={userInfo.user.firstName}
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
                  value={userInfo.user.lastName}
                  name="lastName"
                  onChange={handleUserChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="dark-blue">Prénom</Form.Label>
                <Form.Control
                  type="text"
                  value={userInfo.user.firstName}
                  name="firstName"
                  onChange={handleUserChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Email</Form.Label>
                <Form.Control
                  type="text"
                  value={userInfo.user.identity.email}
                  name="email"
                  onChange={handleIdentityChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Num. Téléphone</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={userInfo.user.identity.phoneNumber}
                  onChange={handleIdentityChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Sexe</Form.Label>
                <br />
                <Form.Check
                  type="radio"
                  label="Homme"
                  checked={userInfo.user.gender === "m"}
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
                  checked={userInfo.user.gender === "f"}
                  onChange={handleUserChange}
                  style={{ display: "inline" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Adresse</Form.Label>
                <CityDropDown
                  choose={false}
                  onCityChange={handleUserChange}
                  onRegionChange={handleUserChange}
                  cityValue={userInfo.user.city}
                  regionValue={userInfo.user.region}
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
                  checked={userInfo.user.preference.displayPhoneNumber === true}
                  onChange={handlePreferenceChange}
                  name="displayPhoneNumber"
                  value={true}
                />
                <Form.Check
                  type="radio"
                  label="Non"
                  name="displayPhoneNumber"
                  checked={
                    userInfo.user.preference.displayPhoneNumber === false
                  }
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
                    userInfo.user.preference.receiveNotificationNewArticle ===
                    true
                  }
                  name="receiveNotificationNewArticle"
                  onChange={handlePreferenceChange}
                  value={true}
                />
                <Form.Check
                  type="radio"
                  label="Non"
                  checked={
                    userInfo.user.preference.receiveNotificationNewArticle ===
                    false
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
                  checked={userInfo.user.preference.receiveEmail === true}
                  name="receiveEmail"
                  onChange={handlePreferenceChange}
                  value={true}
                />
                <Form.Check
                  type="radio"
                  label="Non"
                  name="receiveEmail"
                  checked={userInfo.user.preference.receiveEmail === false}
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
