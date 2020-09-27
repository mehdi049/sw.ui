import React, { useState } from "react";
import { Form } from "react-bootstrap";
import SubItemCategories from "./SubItemCategories";

function ItemCategories(props) {
  const [category, setCategory] = useState("");

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <>
      <Form.Control
        as="select"
        className="select"
        onChange={handleCategoryChange}
      >
        <option value="">Choisir</option>
        <option>Véhicule</option>
        <option>Loisirs</option>
        <option>Electronique</option>
        <option>Maison et jardin</option>
        <option>Habillement</option>
        <option>Jeux video</option>
        <option>Livres</option>
      </Form.Control>
      <br />
      <SubItemCategories category={category} />
    </>
  );
}

export default ItemCategories;
