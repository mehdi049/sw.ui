import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import ReceivedExchanges from "./_sharedComponents/ReceivedExchanges";
import SentExchanges from "./_sharedComponents/SentExchanges";

function MyExchanges() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <Tabs defaultActiveKey="de">
              <Tab eventKey="de" title="Demandes d'échanges">
                <ReceivedExchanges />
              </Tab>
              <Tab eventKey="dee" title="Demandes d'échanges envoyé">
                <SentExchanges />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyExchanges;
