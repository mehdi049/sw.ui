import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button, InputGroup } from "react-bootstrap";
import ItemCategories from "../../_sharedComponents/DropDowns/ItemCategories";
import MultipleImageUploadComponent from "../../_sharedComponents/MultipleImageUpload";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import * as api from "../api/ItemApi";

function AddUpdateItemForm(props) {
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const [itemImages, setItemImages] = useState(
    props.add ? [] : props.item.images.split(";").filter((x) => x !== "")
  );
  const [resetItemImages, setResetItemImages] = useState(false);

  const [item, setItem] = useState(
    props.add
      ? {
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
        }
      : {
          id: props.item.id,
          title: props.item.title,
          description: props.item.description,
          images: props.item.images,
          price: props.item.price,
          exchange: props.item.exchange,
          exchangeWithCategoryId: props.item.exchangeWithCategoryId,
          exchangeWithSubCategoryId: props.item.exchangeWithSubCategoryId,
          conditionId: props.item.condition.id,
          categoryId: props.item.subCategory.categoryId,
          subCategoryId: props.item.subCategoryId,
          userId: props.item.userId,
        }
  );

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
    if (props.add && itemImages.length === 0)
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
                toast.success(
                  "Votre article a été soumis avec succès, il sera publié après la validation du modérateur du site."
                );
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

  function handleUpdateItem() {
    if (validateItem().length > 0) return;

    item.id = parseInt(item.id);
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

    api
      .updateItem(item)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Votre article a été modifié avec succès.");
          props.refreshData();
          props.closePopup();
        } else toast.error(res.message);
        setDisableSubmitButton(false);
      })
      .catch((e) => {
        setDisableSubmitButton(false);
        toast.error("Une erreur s'est produite, veuillez réessayer.");
      });
  }

  function closeUpdatePopup() {
    if (props.closePopup) props.closePopup();
  }

  if (userInfo === null) return <Redirect to="/" />;

  return (
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
          categoryId={item.categoryId}
          subCategoryId={item.subCategoryId}
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
      {props.add && (
        <Form.Group>
          <Form.Label className="dark-blue">Image(s)</Form.Label>&nbsp;
          <span className="small">(Maximum 5 photos)</span>
          <br />
          <MultipleImageUploadComponent
            setItemImages={setItemImages}
            reset={resetItemImages}
          />
        </Form.Group>
      )}
      <Form.Group>
        <Form.Label className="dark-blue">Prix</Form.Label>
        <InputGroup className="mb-2 mr-sm-2">
          <Form.Control
            type="number"
            name="price"
            onChange={handleItemFormChange}
            value={item.price && item.price !== null ? item.price : ""}
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
            categoryId={item.exchangeWithCategoryId}
            subCategoryId={item.exchangeWithSubCategoryId}
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
          defaultChecked={item.exchange === false}
        />
      </Form.Group>
      <div className="text-right">
        {props.add ? (
          <>
            <Button
              variant="primary"
              type="button"
              onClick={handleAddItem}
              disabled={disableSubmitButton}
            >
              Ajouter
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="secondary"
              type="button"
              onClick={closeUpdatePopup}
            >
              Annuler
            </Button>
            &nbsp;
            <Button
              variant="primary"
              type="button"
              onClick={handleUpdateItem}
              disabled={disableSubmitButton}
            >
              Modfier
            </Button>
          </>
        )}
      </div>
    </Form>
  );
}

export default AddUpdateItemForm;
