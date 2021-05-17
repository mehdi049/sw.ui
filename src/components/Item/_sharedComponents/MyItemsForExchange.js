import React, { useEffect, useState } from "react";
import { Row, Col, Badge, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Error from "../../_sharedComponents/Error";
import * as api from "../api/CategoryApi";

function MyItemsForExchange(props) {
  const [isError, setIsError] = useState(false);

  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    api
      .getItemsByUser(props.userId)
      .then((res) => {
        setIsError(false);
        setIsLoaded(true);
        res.body.map((x) => {
          x.item.selected = false;
        });
        setItems(res.body);
        console.log(res.body);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  function addSelectedItem(item, i) {
    let _items = selectedItems;
    if (
      selectedItems.length === 0 ||
      selectedItems.filter((x) => x.item.id === item.item.id).length === 0
    )
      _items.push(item);
    else _items = _items.filter((x) => x.item.id !== item.item.id);

    setSelectedItems(_items);

    items[i].item.selected = !items[i].item.selected;
    setItems(items);
  }

  function validateImage(imgPath, className) {
    try {
      return (
        <div
          className={className}
          style={{
            backgroundImage:
              "url(" +
              require(process.env.REACT_APP_ITEM_UPLOAD_PATH + imgPath) +
              ")",
          }}
        ></div>
      );
    } catch (err) {
      return (
        <div
          className={className}
          style={{
            backgroundImage: "url(/images/not-available.jpg)",
            backgroundSize: "cover",
          }}
        ></div>
      );
    }
  }

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto", overflowX: "hidden" }}>
      <>
        {isLoaded &&
          (items.length > 0 ? (
            items.map((x, i) => (
              <Row
                key={i}
                className={
                  x.item.selected === true
                    ? "item-to-exchange selected"
                    : "item-to-exchange"
                }
                onClick={() => addSelectedItem(x, i)}
              >
                <Col xs={3}>
                  {validateImage(
                    x.item.images.split(";")[0],
                    "item-img-container-sm"
                  )}
                  <br />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    className="select-item-checkbox"
                    defaultChecked={x.item.selected === true}
                  />
                  <Badge className={"bg-" + x.item.subCategory.category.id}>
                    {x.item.subCategory.category.name}
                  </Badge>
                  <br />
                  <span className="bold blue">{x.item.title}</span>
                  <br />
                </Col>
              </Row>
            ))
          ) : (
            <Alert variant="info">
              Vous n'avez aucun article ajouté dans le site. <br />
              <Link to="/add-item" className="small underline dark-blue">
                Ajouter un article.
              </Link>
            </Alert>
          ))}

        {isError && <Error />}
      </>
    </div>
  );
}

export default MyItemsForExchange;
