import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CityDropDown from "./_sharedComponents/CityDropDown";

function LeftSideFilter() {
  return (
    <>
      <h3>Categories</h3>
      <Link to="/" className="side-category-link">
        Electroménager et vaisselles
      </Link>
      <Link to="/" className="side-category-link">
        Meubles et décoration
      </Link>
      <Link to="/" className="side-category-link">
        Jardin et outils de bricolage
      </Link>
      <br />
      <br />
      <h5>Localisation</h5>
      <CityDropDown all={true} />
      <br />
      <h5>Condition</h5>
      <Form.Check type="checkbox" label="Neuf" className="dark-gray" />
      <Form.Check type="checkbox" label="Usé" className="dark-gray" />
    </>
  );
}

export default LeftSideFilter;
