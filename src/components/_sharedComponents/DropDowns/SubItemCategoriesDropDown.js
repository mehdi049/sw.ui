import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import * as api from "../api/CategoryApi";

function SubItemCategoriesDropDown(props) {
  const [category, setCategory] = useState(props.categoryId);

  useEffect(() => {
    if (props.categoryId !== "")
      api.getCategory(props.categoryId).then((res) => {
        setCategory(res.body);
      });
  }, [props.categoryId]);

  return (
    <Form.Control
      as="select"
      className="select"
      name={props.subCategoryFieldName}
      onChange={props.onChange}
      value={props.subCategoryId !== null ? props.subCategoryId : ""}
    >
      {props.all && <option value="">Tout</option>}
      {!props.all && <option value="">Selectionner une sous catégorie</option>}
      {category.subCategories &&
        category.subCategories.map((x) => {
          return (
            <option key={x.id} value={x.id}>
              {x.name}
            </option>
          );
        })}
    </Form.Control>
  );
}

export default SubItemCategoriesDropDown;
