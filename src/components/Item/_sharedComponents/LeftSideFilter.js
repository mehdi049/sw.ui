import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import CityDropDown from "../../_sharedComponents/DropDowns/CityDropDown";

function LeftSideFilter(props) {
  const [activeCat, setActiveCat] = useState("");

  function setActive(name) {
    setActiveCat(name);
  }
  return (
    <div id="sidebar-left">
      <h3>Categories</h3>
      {props.subCategories.map((x) => {
        return (
          <span
            key={x.id}
            active={activeCat === x.id ? "true" : "false"}
            onClick={() => setActive(x.id)}
            className="dash-separation side-category-link"
          >
            {x.name}
          </span>
        );
      })}
      <br />
      <br className="d-none d-md-block" />
      <h3>Emplacement</h3>
      <CityDropDown all={true} />
      <br />
      <h3>Condition</h3>
      <Form.Check type="checkbox" label="Neuf" className="dark-gray" />
      <Form.Check type="checkbox" label="Occasion" className="dark-gray" />
      <br />
      <h3>Prix</h3>
      <InputGroup className="mb-2 mr-sm-2">
        <Form.Control type="text" placeholder="min" />
        <InputGroup.Append className="white">
          <InputGroup.Text>Dt</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>

      <InputGroup className="mb-2 mr-sm-2">
        <Form.Control type="text" placeholder="max" />
        <InputGroup.Append className="white">
          <InputGroup.Text>Dt</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default LeftSideFilter;
