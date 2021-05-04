import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import SubItemCategoriesDropDown from "../DropDowns/SubItemCategoriesDropDown";
import * as api from "../api/CategoryApi";

function ItemCategories(props) {
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  function handleCategoryChange(event) {
    props.categoryOnChange(event);
    setCategoryId(event.target.value);
  }

  useEffect(() => {
    api.getCategories().then((res) => {
      setCategories(res.body);
    });
  }, []);

  return (
    <>
      <Form.Control
        as="select"
        className="select"
        name={props.categoryFieldName}
        onChange={handleCategoryChange}
      >
        {props.openForAll && <option value="">Ouvert à tout</option>}
        {props.select && <option value="">Selectionner une catégorie</option>}
        {categories.map((x) => {
          return (
            <option key={x.id} value={x.id}>
              {x.name}
            </option>
          );
        })}
      </Form.Control>
      {categoryId.length > 0 && (
        <>
          <br />
          <SubItemCategoriesDropDown
            all
            categoryId={categoryId}
            onChange={props.subCategoryOnChange}
            subCategoryFieldName={props.subCategoryFieldName}
          />
        </>
      )}
    </>
  );
}

export default ItemCategories;
