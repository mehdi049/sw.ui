import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import CityDropDown from "../../_sharedComponents/DropDowns/CityDropDown";

function LeftSideFilter(props) {
  return (
    <div id="sidebar-left">
      <h3>Categories</h3>
      {props.subCategories.map((x) => {
        return (
          <span
            key={x.id}
            active={props.activeSubCategoryId === x.id ? "true" : "false"}
            onClick={() => props.subCategoriesOnChange(x.id, x.name)}
            className="dash-separation side-category-link"
          >
            {x.name}
          </span>
        );
      })}
      <br />
      <br className="d-none d-md-block" />
      <h3>Emplacement</h3>
      <CityDropDown
        all={true}
        onCityChange={props.onFilterChange}
        onRegionChange={props.onFilterChange}
        cityValue={props.filter.city}
        regionValue={props.filter.region}
      />
      <br />
      <br className="d-none d-md-block" />
      <h3>Condition</h3>
      <Form.Check
        type="radio"
        label="Tout"
        value=""
        name="conditionFilter"
        className="dark-gray"
        checked={props.filter.conditionFilter === ""}
        onChange={props.onFilterChange}
      />
      <Form.Check
        type="radio"
        label="Neuf"
        value="2"
        name="conditionFilter"
        className="dark-gray"
        checked={props.filter.conditionFilter === "2"}
        onChange={props.onFilterChange}
      />
      <Form.Check
        type="radio"
        label="Occasion"
        value="1"
        name="conditionFilter"
        className="dark-gray"
        checked={props.filter.conditionFilter === "1"}
        onChange={props.onFilterChange}
      />
      <br />
      <br className="d-none d-md-block" />
      <h3>Prix</h3>
      <InputGroup className="mb-2 mr-sm-2">
        <Form.Control
          type="number"
          placeholder="min"
          name="minPriceFilter"
          value={props.filter.minPriceFilter}
          onChange={props.onFilterChange}
        />
        <InputGroup.Append className="white">
          <InputGroup.Text>TND</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>

      <InputGroup className="mb-2 mr-sm-2">
        <Form.Control
          type="number"
          placeholder="max"
          name="maxPriceFilter"
          value={props.filter.maxPriceFilter}
          onChange={props.onFilterChange}
        />
        <InputGroup.Append className="white">
          <InputGroup.Text>TND</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default LeftSideFilter;
