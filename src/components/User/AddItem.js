import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProfileInfo from "./_sharedComponents/ProfileInfo";
import AddedItems from "./_sharedComponents/AddedItems";
import AddUpdateItemForm from "./_sharedComponents/AddUpdateItemForm";

function AddItem() {
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  if (userInfo === null) return <Redirect to="/" />;

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col className="d-none d-sm-block" xs={12} sm={4} md={3}>
            <ProfileInfo />
          </Col>
          <Col xs={12} sm={8} lg={6}>
            <br className="d-block d-sm-none" />
            <h3>Créer une annonce</h3>
            <AddUpdateItemForm add={true} />
            <br />
          </Col>
          <Col lg={3} className="d-none d-lg-block">
            <AddedItems userId={userInfo.id} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddItem;
