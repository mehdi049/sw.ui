import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Container, Row, Col, Button, InputGroup } from "react-bootstrap";
import ItemCategories from "../_sharedComponents/DropDowns/ItemCategories";
import MultipleImageUploadComponent from "../_sharedComponents/MultipleImageUpload";
import ProfileInfo from "./_sharedComponents/ProfileInfo";
import AddedItems from "./_sharedComponents/AddedItems";
import { toast } from "react-toastify";
import * as api from "./api/ItemApi";

function AddItem() {
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const [disableSubmitButton, setDisableSubmitButton] = useState(false);

  const [itemImages, setItemImages] = useState([]);
  const [resetItemImages, setResetItemImages] = useState(false);

  const [item, setItem] = useState({
    title: "",
    description: "",
    images: "",
    price: "",
    exchange: true,
    exchangeWithCategoryId: "",
    exchangeWithSubCategoryId: "",
    conditionId: "1",
    categoryId: "",
    subCategoryId: "",
    userId: userInfo.id,
  });

  function handleItemFormChange(event) {
    setResetItemImages(false);
    const _item = {
      ...item,
      [event.target.name]:
        event.target.type === "checkbox"
          ? !event.target.checked
          : event.target.value,
    };
    if (_item.categoryId === "") _item.subCategoryId = "";

    if (event.target.type === "checkbox" && event.target.checked) {
      _item.exchangeWithCategoryId = "";
      _item.exchangeWithSubCategoryId = "";
    }

    setItem(_item);
  }

  function validateItem() {
    let _error = "";

    if (item.title === "")
      _error += "<p>&bull; Le champ 'Titre' est obligatoire.</p>";
    if (item.description === "")
      _error += "<p>&bull; Le champ 'Description' est obligatoire.</p>";
    if (item.categoryId === "")
      _error += "<p>&bull; Le champ 'Categorie' est obligatoire.</p>";
    if (item.subCategoryId === "")
      _error += "<p>&bull; Le champ 'Sous categorie' est obligatoire.</p>";
    if (itemImages.length === 0)
      _error +=
        "<p>&bull; Veuillez sélectionner une ou plusieurs images pour votre article.</p>";

    if (!item.exchange && item.price === "")
      _error += "<p>&bull; Le champ 'Prix' est obligatoire.</p>";

    if (_error.length > 0) {
      const Msg = () => <div dangerouslySetInnerHTML={{ __html: _error }} />;
      toast.error(<Msg />);
    }

    return _error;
  }

  function handleAddItem() {
    if (validateItem().length > 0) return;

    item.conditionId = parseInt(item.conditionId);
    item.categoryId = parseInt(item.categoryId);
    item.subCategoryId = parseInt(item.subCategoryId);
    if (item.price !== "") item.price = parseFloat(item.price);
    else item.price = null;
    if (item.exchangeWithCategoryId !== "")
      item.exchangeWithCategoryId = parseInt(item.exchangeWithCategoryId);
    if (item.exchangeWithSubCategoryId !== "")
      item.exchangeWithSubCategoryId = parseInt(item.exchangeWithSubCategoryId);

    setDisableSubmitButton(true);

    var formData = new FormData();
    itemImages.map((x) => {
      formData.append("model", x);
    });

    api
      .uploadItemImages(formData)
      .then((res) => {
        if (res.status === 200) {
          let _itemImages = "";
          res.body.map((x) => {
            _itemImages += x + ";";
          });
          item.images = _itemImages;
          api
            .addItem(item)
            .then((submitItemRes) => {
              if (submitItemRes.status === 200) {
                toast.success(
                  "Votre article a été soumis avec succès, il sera publié après la validation du modérateur du site."
                );
                setItem({
                  title: "",
                  description: "",
                  images: "",
                  price: "",
                  exchange: true,
                  exchangeWithCategoryId: "",
                  exchangeWithSubCategoryId: "",
                  conditionId: "1",
                  categoryId: "",
                  subCategoryId: "",
                  userId: userInfo.id,
                });
                setItemImages([]);
                setResetItemImages(true);
              } else toast.error(res.message);
            })
            .catch((e) => {
              setDisableSubmitButton(false);
              toast.error("Une erreur s'est produite, veuillez réessayer.");
            });
        } else toast.error(res.message);
        setDisableSubmitButton(false);
      })
      .catch((e) => {
        setDisableSubmitButton(false);
        toast.error(
          "Une erreur s'est produite lors d'upload d'image(s), veuillez réessayer."
        );
      });
  }

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
            <Form>
              <Form.Group>
                <Form.Label className="dark-blue">Titre</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleItemFormChange}
                  value={item.title}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="description"
                  onChange={handleItemFormChange}
                  value={item.description}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Catégorie</Form.Label>
                <ItemCategories
                  select={true}
                  categoryFieldName="categoryId"
                  subCategoryFieldName="subCategoryId"
                  subCategoryOnChange={handleItemFormChange}
                  categoryOnChange={handleItemFormChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label
                  className="dark-blue"
                  name="conditionId"
                  onChange={handleItemFormChange}
                >
                  Condition
                </Form.Label>
                <Form.Control
                  as="select"
                  className="select"
                  name="conditionId"
                  onChange={handleItemFormChange}
                  value={item.conditionId}
                >
                  <option value="1">Occasion</option>
                  <option value="2">Neuf</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Image(s)</Form.Label>&nbsp;
                <span className="small">(Maximum 5 photos)</span>
                <br />
                <MultipleImageUploadComponent
                  setItemImages={setItemImages}
                  reset={resetItemImages}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="dark-blue">Prix</Form.Label>
                <InputGroup className="mb-2 mr-sm-2">
                  <Form.Control
                    type="number"
                    name="price"
                    onChange={handleItemFormChange}
                    value={item.price}
                  />
                  <InputGroup.Append className="white">
                    <InputGroup.Text>Dt</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
              {item.exchange === true && (
                <Form.Group>
                  <Form.Label className="dark-blue">Echange avec</Form.Label>
                  <ItemCategories
                    openForAll={true}
                    categoryFieldName="exchangeWithCategoryId"
                    subCategoryFieldName="exchangeWithSubCategoryId"
                    subCategoryOnChange={handleItemFormChange}
                    categoryOnChange={handleItemFormChange}
                  />
                </Form.Group>
              )}
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  className="mb-2 mr-sm-2"
                  label="Je ne suis pas ouvert à l'échange"
                  value={false}
                  name="exchange"
                  onChange={handleItemFormChange}
                />
              </Form.Group>
              <div className="text-right">
                <Button
                  variant="primary"
                  type="button"
                  onClick={handleAddItem}
                  disabled={disableSubmitButton}
                >
                  Ajouter
                </Button>
              </div>
            </Form>
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
