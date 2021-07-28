import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Container,
  Row,
  Col,
  Badge,
  Modal,
  Button,
  Alert,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faClock,
  faComment,
  faCoins,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import * as api from "./api/ItemApi";
import Pagination from "react-js-pagination";
import Error from "../_sharedComponents/Error";
import AddUpdateItemForm from "./_sharedComponents/AddUpdateItemForm";

function MyItems() {
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [isError, setIsError] = useState(false);

  const [addedItems, setAddedItems] = useState([]);
  const [displayAddedItems, setDisplayAddedItems] = useState(false);

  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToUpdate, setItemToUpdate] = useState(null);

  const [paginatedItems, setPaginatedItems] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showUpdateImgs, setShowUpdateImgs] = useState(false);

  useEffect(() => {
    if (userInfo.id) {
      loadMyItems();
    }
  }, []);

  function loadMyItems() {
    api
      .getItemsByUser(userInfo.id)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.body);
          setAddedItems(res.body);
          setPaginatedItems(res.body.slice(0, 5));
          setDisplayAddedItems(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  function showDeletePopup(item) {
    setItemToDelete(item);
    setShowDelete(true);
  }

  function deleteItem() {
    if (userInfo.id && itemToDelete.id) {
      api
        .deleteItem(itemToDelete.id, userInfo.id)
        .then((res) => {
          if (res.status === 200) {
            setShowDelete(false);
            toast.success("Article supprimé avec succès.");
            loadMyItems();
            setItemToDelete({});
          } else toast.error(res.message);
        })
        .catch((e) => {
          toast.error("Une erreur s'est produite, veuillez réessayer.");
        });
    }
  }

  function showUpdatePopup(item) {
    setItemToUpdate(item);
    setShowUpdate(true);
  }

  function showUpdateImgsPopup(item) {
    setItemToUpdate(item);
    setShowUpdateImgs(true);
  }

  function removeImage(event, img, imgKey) {
    event.preventDefault();
    api
      .deleteItemImg(itemToUpdate.id, img)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Image supprimé avec succès.");
        } else toast.error(res.message);
      })
      .catch((e) => {
        toast.error("Une erreur s'est produite, veuillez réessayer.");
      });
  }

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
    const pStart = (pageNumber - 1) * 5;
    setPaginatedItems(addedItems.slice(pStart, pStart + 5));
  }

  function handleSortItem(event) {
    let _items = addedItems;
    if (event.target.value === "newest")
      _items = _items.sort((a, b) =>
        a.item.addedTime < b.item.addedTime ? 1 : -1
      );
    if (event.target.value === "status")
      _items = _items.sort((a, b) =>
        a.item.itemStatus.id > b.item.itemStatus.id ? 1 : -1
      );

    console.log(_items);
    setPaginatedItems(_items.slice(0, 5));
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

  if (userInfo === null) return <Redirect to="/" />;

  return (
    <>
      <br />
      {isError ? (
        <Error />
      ) : (
        <Container>
          <Row>
            <Col sm={6} lg={9}>
              <h3>Mes articles</h3>
            </Col>
            <Col sm={6} lg={3}>
              {addedItems.length > 0 && (
                <Form>
                  <Form.Group as={Row}>
                    <Col className="text-right">
                      <span className="bold small blue">
                        {addedItems.length} articles{" "}
                      </span>
                      <Form.Control
                        as="select"
                        className="select"
                        name="item-sort"
                        onChange={(e) => handleSortItem(e)}
                      >
                        <option value="newest">Trié par le plus recent</option>
                        <option value="status">Trié par status</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                </Form>
              )}
            </Col>
          </Row>

          {addedItems.length > 0 ? (
            <>
              <Row className="dark-blue-bg">
                <Col xs={6} lg={7}>
                  <br />
                  <p>Article</p>
                </Col>
                <Col xs={6} lg={5}>
                  <br />
                  <p>Demandes d'échange(s)</p>
                </Col>
                <Col className="d-none d-sm-block" xs={2} lg={1}></Col>
              </Row>
              <br />
              {paginatedItems.map((x) => (
                <React.Fragment key={x.item.id}>
                  <Row id="my-item-table">
                    <Col
                      className="d-none d-sm-block"
                      xs={2}
                      sm={2}
                      md={2}
                      lg={1}
                    >
                      {validateImage(
                        x.item.images.split(";")[0],
                        "item-img-container-sm"
                      )}
                      {/* 
                      <div className="text-center">
                        <span
                          className="underline dark-blue pointer small"
                          onClick={() => showUpdateImgsPopup(x.item)}
                        >
                          Modifier
                        </span>
                      </div>
                      */}
                    </Col>
                    <Col xs={6} sm={4} md={4} lg={6}>
                      <div className="d-block d-sm-none">
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="blue pointer"
                          onClick={() => showDeletePopup(x.item)}
                        />
                        &nbsp;|&nbsp;
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="blue pointer"
                          onClick={() => showUpdatePopup(x.item)}
                        />
                      </div>
                      <Badge className={"bg-" + x.item.subCategory.category.id}>
                        {x.item.subCategory.category.name}
                      </Badge>
                      <br className="d-block d-md-none" />
                      <span className="small">
                        <span className="d-none d-md-inline">&nbsp;&nbsp;</span>{" "}
                        <FontAwesomeIcon icon={faClock} />{" "}
                        {format(new Date(x.item.addedTime), "dd MMMM yyyy", {
                          locale: fr,
                        })}{" "}
                        | <FontAwesomeIcon icon={faComment} />{" "}
                        {x.item.itemFeedbacks.length}
                      </span>
                      <p style={{ wordBreak: "break-word" }}>
                        <Link className="bold blue" to={"/item/" + x.item.id}>
                          {x.item.title}
                        </Link>
                        <br className="d-block d-md-none" />
                        <span className="price-info blue">
                          {x.item.price && x.item.price !== 0 && (
                            <>
                              {" "}
                              <FontAwesomeIcon icon={faCoins} /> {x.item.price}{" "}
                              TND &nbsp;&nbsp; &nbsp;
                            </>
                          )}
                          {x.item.exchange && (
                            <>
                              <br className="d-block d-md-none" />
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              &nbsp; Echange
                            </>
                          )}
                        </span>
                        {x.item.description.substr(0, 100)}{" "}
                        {x.item.description.length > 100 && <>[...]</>}
                      </p>
                      <p className="item-status">
                        <span
                          className={
                            "status status-" +
                            x.item.itemStatus.status.toLowerCase()
                          }
                        ></span>{" "}
                        <span className="underline">
                          {x.item.itemStatus.id === 1 && <>Active</>}
                          {x.item.itemStatus.id === 2 && <>Rejeté</>}
                          {x.item.itemStatus.id === 3 && (
                            <>En cours de vérification</>
                          )}
                        </span>
                      </p>
                    </Col>
                    <Col xs={6} sm={4} md={4} lg={4}>
                      {x.item.itemExchanges !== null ? (
                        x.item.itemExchanges.map((itemExchange) => (
                          <React.Fragment key={itemExchange.id}>
                            {itemExchange.itemsToExchange.map(
                              (itemsToExchange) => (
                                <React.Fragment key={itemsToExchange.id}>
                                  <Badge className="bg-3 badge">
                                    {itemsToExchange.subCategory.category.name}
                                  </Badge>
                                  &nbsp;
                                  <span className="small">
                                    {/* Par {itemsToExchange.user.firstname} |{" "}  */}
                                    <FontAwesomeIcon icon={faClock} />{" "}
                                    {format(
                                      new Date(
                                        itemExchange.exchangeRequestTime
                                      ),
                                      "dd MMMM yyyy",
                                      {
                                        locale: fr,
                                      }
                                    )}{" "}
                                  </span>
                                  <Link
                                    to={"/item/" + itemsToExchange.id}
                                    className="blue bold d-block"
                                  >
                                    {itemsToExchange.title}
                                  </Link>
                                </React.Fragment>
                              )
                            )}
                            <hr />
                          </React.Fragment>
                        ))
                      ) : (
                        <Alert variant="info">
                          Aucune demande d'échange pour cet article.
                        </Alert>
                      )}
                    </Col>
                    <Col
                      className="d-none d-sm-block"
                      xs={2}
                      sm={2}
                      md={2}
                      lg={1}
                    >
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="blue pointer"
                        onClick={() => showDeletePopup(x.item)}
                      />
                      &nbsp;|&nbsp;
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="blue pointer"
                        onClick={() => showUpdatePopup(x.item)}
                      />
                    </Col>
                  </Row>
                  <hr />
                  <br />
                </React.Fragment>
              ))}
              <Row>
                <Col>
                  <Pagination
                    activePage={activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={addedItems.length}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange.bind(this)}
                    itemClass="page-item"
                    linkClass="page-link"
                  />
                </Col>
              </Row>

              {/* delete popup */}
              {itemToDelete !== null && (
                <Modal show={showDelete} onHide={() => setShowDelete(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title className="dark-blue">
                      Retirer votre article
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Est ce que vous êtes sure que vous voulez supprimer votre
                    article <b className="dark-blue">{itemToDelete.title}</b>?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowDelete(false)}
                    >
                      Annuler
                    </Button>
                    <Button variant="primary" onClick={deleteItem}>
                      Supprimer
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}

              {/* update popup */}
              {itemToUpdate !== null && (
                <Modal
                  show={showUpdate}
                  onHide={() => setShowUpdate(false)}
                  size="lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="dark-blue">
                      Modifier votre article
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <AddUpdateItemForm
                      edit={true}
                      item={itemToUpdate}
                      refreshData={loadMyItems}
                      closePopup={() => setShowUpdate(false)}
                    />
                  </Modal.Body>
                </Modal>
              )}

              {/* update popup */}
              {itemToUpdate !== null && (
                <Modal
                  show={showUpdateImgs}
                  onHide={() => setShowUpdateImgs(false)}
                  size="lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="dark-blue">
                      Modifier les images de votre article
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {itemToUpdate.images
                      .split(";")
                      .filter((x) => x !== "")
                      .map((img, i) => {
                        return (
                          <div key={i} className="item-img-toDelete">
                            {validateImage(img, "item-img-container-sm")}
                            <span>
                              <FontAwesomeIcon
                                icon={faTrashAlt}
                                className="dark-blue pointer"
                                onClick={(e) => removeImage(e, img, i)}
                              />
                            </span>
                          </div>
                        );
                      })}
                  </Modal.Body>
                </Modal>
              )}
            </>
          ) : (
            displayAddedItems && (
              <Alert variant="info">Pas d'articles recement ajouté.</Alert>
            )
          )}
        </Container>
      )}
    </>
  );
}

export default MyItems;
