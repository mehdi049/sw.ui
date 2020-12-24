import React, { useState } from "react";
import { Row, Col, Badge, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function MyItemsForExchange() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  function addSelectedItem(item) {
    setIsLoaded(false);

    let _items = selectedItems;
    if (selectedItems.indexOf(item) >= 0)
      _items = _items.filter((x) => x !== item);
    else _items.push(item);

    setSelectedItems(_items);

    setTimeout(function () {
      setIsLoaded(true);
    }, 200);
  }

  function getItemClass(item) {
    if (selectedItems.indexOf(item) >= 0) return "item-to-exchange selected";

    return "item-to-exchange";
  }

  function setSelectedItem(item) {
    if (selectedItems.indexOf(item) >= 0) return true;

    return false;
  }

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden" }}>
      {isLoaded ? (
        <>
          {[...Array(8)].map((x, i) => (
            <Row
              key={i}
              className={getItemClass(i)}
              onClick={() => addSelectedItem(i)}
            >
              <Col xs={3}>
                <div className="item-img-container-sm">
                  <span className="helper"></span>
                  <img
                    src={require("../../../images/uploads/item1-1.png")}
                    className="item-img"
                    alt=""
                  />
                </div>
                <br />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  className="select-item-checkbox"
                  defaultChecked={setSelectedItem(i)}
                />
                <Badge className="green2-bg">Electronique</Badge>
                <br />
                <span className="bold blue">Samsung galaxi s20</span>
                <span className="small">
                  &nbsp;&nbsp;
                  <FontAwesomeIcon icon={faClock} /> 22 Aout
                </span>
                <br />
              </Col>
            </Row>
          ))}
        </>
      ) : (
        <span>loading...</span>
      )}
    </div>
  );
}

export default MyItemsForExchange;
