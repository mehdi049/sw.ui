import React from "react";
import { Form } from "react-bootstrap";

function RegionDropDown(props) {
  if (props.city === "Ariana")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option>Tout</option>}
        <option>Ariana ville</option>
        <option>Borj Louzir</option>
        <option>Chotrana</option>
        <option>Ennasr</option>
        <option>Ettadhamen</option>
        <option>Ghazela</option>
        <option>Jardins d'El Menzah</option>
        <option>La Soukra</option>
        <option>Mnihla</option>
        <option>Raoued</option>
        <option>Sidi Thabet</option>
        <option>Autre</option>
      </Form.Control>
    );
  if (props.city === "Ben Arous")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option>Tout</option>}
        <option>Boumhel</option>
        <option>El Mourouj</option>
        <option>Ezzahra</option>
        <option>Fouchana</option>
        <option>Hammam Chott</option>
        <option>Hammam Lif</option>
        <option>Medina Jedida</option>
        <option>Mohamedia</option>
        <option>Mornag</option>
        <option>Mégrine</option>
        <option>Radés</option>
        <option>Autre</option>
      </Form.Control>
    );
  if (props.city === "Bizerte")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option>Tout</option>}
        <option>Bizerte Nord</option>
        <option>Bizerte Sud</option>
        <option>Joumine</option>
        <option>Ghar El Melh</option>
        <option>Ghezala</option>
        <option>Mateur</option>
        <option>Menzel Bourguiba</option>
        <option>Ras Jebel</option>
        <option>Sejenane</option>
        <option>Tinja</option>
        <option>Utique</option>
        <option>Zarzouna</option>
        <option>Autre</option>
      </Form.Control>
    );
  if (props.city === "Béja")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option>Tout</option>}
        <option>Béja Nord</option>
        <option>Béja Sud</option>
        <option>El Ksar</option>
        <option>Goubellat</option>
        <option>Medjez el Bab</option>
        <option>Nefza</option>
        <option>Testour</option>
        <option>Thibar</option>
        <option>Téboursouk</option>
        <option>Autre</option>
      </Form.Control>
    );
  if (props.city === "Gabés")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option>Tout</option>}
        <option>El Hamma</option>
        <option>Gabés Médina</option>
        <option>Gabés Ouest</option>
        <option>Gabés Sud</option>
        <option>Ghanouch</option>
        <option>Mareth</option>
        <option>Matmata</option>
        <option>Métouia</option>
        <option>Nouvelle Matmata</option>
        <option>Autre</option>
      </Form.Control>
    );
  return null;
}

export default RegionDropDown;
