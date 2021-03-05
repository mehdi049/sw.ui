import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import SubItemCategoriesDropDown from "./DropDowns/SubItemCategoriesDropDown";
import * as api from "./api/CategoryApi";

function ItemCategories(props) {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  function handleCategoryChange(event) {
    setCategory(event.target.value);
    console.log(
      categories.find((x) => x.id === parseInt(event.target.value))
        .subCategories
    );
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
        onChange={handleCategoryChange}
      >
        {props.all && <option value="">Ouvert à tout</option>}
        {!props.all && <option value="">Choisir</option>}
        {categories.map((x) => {
          return (
            <option key={x.id} value={x.id}>
              {x.name}
            </option>
          );
        })}
      </Form.Control>
      <br />
      <SubItemCategoriesDropDown all category={category} />
    </>
  );
}

export default ItemCategories;
