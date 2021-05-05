import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Row, Col, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  faClock,
  faComment,
  faCoins,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import * as api from "../api/ItemApi";

function AddedItems(props) {
  const [displayAddedItems, setDisplayAddedItems] = useState(false);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    if (props.userId) {
      api
        .getItemsByUser(props.userId)
        .then((res) => {
          if (res.status === 200) {
            setAddedItems(res.body);
            setDisplayAddedItems(true);
          }
        })
        .catch((e) => {
          toast.error(
            "Une erreur s'est produite lors d'upload d'image(s), veuillez réessayer."
          );
        });
    }
  }, []);

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
    <>
      <h3>Articles ajoutés</h3>
      {addedItems.length > 0 ? (
        <>
          {addedItems.slice(0, 4).map((x) => (
            <Link
              key={x.item.id}
              to={"/item/" + x.item.id}
              className="dash-separation added-item-link"
            >
              <Row>
                <Col md={4} xl={3}>
                  {validateImage(
                    x.item.images.split(";")[0],
                    "item-img-container-sm"
                  )}
                </Col>
                <Col>
                  <p className="bold blue" style={{ wordBreak: "break-word" }}>
                    {x.item.title}
                  </p>
                  <span className="small">
                    <FontAwesomeIcon icon={faClock} />{" "}
                    {format(new Date(x.item.addedTime), "dd MMMM yyyy", {
                      locale: fr,
                    })}
                    &nbsp; | &nbsp;
                    <FontAwesomeIcon icon={faComment} />{" "}
                    {x.item.itemFeedbacks.length}
                  </span>
                  <span className="price-info blue">
                    {x.item.price && x.item.price !== 0 && (
                      <>
                        {" "}
                        <FontAwesomeIcon icon={faCoins} /> {x.item.price} TND
                        &nbsp;&nbsp;
                      </>
                    )}
                    <span className="d-block d-xl-inline">
                      {x.item.exchange && (
                        <>
                          <FontAwesomeIcon icon={faExchangeAlt} />
                          &nbsp; Echange
                        </>
                      )}
                    </span>
                  </span>
                </Col>
              </Row>
            </Link>
          ))}
          <br />
          <Link to="/my-items" className="blue">
            Afficher tous
          </Link>
        </>
      ) : (
        displayAddedItems && (
          <Alert variant="info">Pas d'articles recement ajouté.</Alert>
        )
      )}
    </>
  );
}

export default AddedItems;
