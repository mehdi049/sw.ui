import React, { useState } from "react";
import { Form } from "react-bootstrap";
import RegionDropDown from "./RegionDropDown";

function CityDropDown(props) {
  const [city, setCity] = useState(props.cityValue ? props.cityValue : "");

  function handleCityChange(event) {
    props.onCityChange(event);
    setCity(event.target.value);
  }

  return (
    <>
      <Form.Control
        as="select"
        className="select"
        onChange={handleCityChange}
        value={props.cityValue}
        name="city"
      >
        {props.all && <option value="">Toute la Tunisie</option>}
        {props.choose && <option value="">Selectionner votre ville</option>}
        <option>Ariana</option>
        <option>Ben Arous</option>
        <option>Bizerte</option>
        <option>Béja</option>
        <option>Gabés</option>
        <option>Gafsa</option>
        <option>Jendouba</option>
        <option>Kairouan</option>
        <option>Kasserine</option>
        <option>Kélibi</option>
        <option>Manouba</option>
        <option>Kef</option>
        <option>Mahdia</option>
        <option>Monastir</option>
        <option>Médenine</option>
        <option>Nabeul</option>
        <option>Sfax</option>
        <option>Sidi Bouzid</option>
        <option>Siliana</option>
        <option>Sousse</option>
        <option>Tataouine</option>
        <option>Tozeur</option>
        <option>Tunis</option>
        <option>Zaghouan</option>
      </Form.Control>
      {city && city.length > 0 && (
        <RegionDropDown
          all={false}
          city={city}
          regionValue={props.regionValue}
          select={true}
          onRegionChange={props.onRegionChange}
        />
      )}
    </>
  );
}

export default CityDropDown;
