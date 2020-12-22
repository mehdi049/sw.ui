import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CityDropDown from "./_sharedComponents/CityDropDown";

function LeftSideFilter() {
  const [activeCat, setActiveCat] = useState("");

  function setActive(name) {
    setActiveCat(name);
  }
  return (
    <div id="sidebar-left">
      <h3>Categories</h3>
      <Link
        to="/category"
        active={activeCat === 1 ? "true" : "false"}
        onClick={() => setActive(1)}
        className="dash-separation side-category-link"
      >
        Electroménager et vaisselles
      </Link>
      <Link
        to="/category"
        active={activeCat === 2 ? "true" : "false"}
        onClick={() => setActive(2)}
        className="dash-separation side-category-link"
      >
        Meubles et décoration
      </Link>
      <Link
        to="/category"
        active={activeCat === 3 ? "true" : "false"}
        onClick={() => setActive(3)}
        className="dash-separation side-category-link"
      >
        Jardin et outils de bricolage
      </Link>
      <br />
      <br className="d-none d-md-block" />
      <h3>Emplacement</h3>
      <CityDropDown all={true} />
      <br />
      <h3>Condition</h3>
      <Form.Check type="checkbox" label="Neuf" className="dark-gray" />
      <Form.Check type="checkbox" label="Usé" className="dark-gray" />
    </div>
  );
}

export default LeftSideFilter;
