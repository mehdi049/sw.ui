import React from "react";
import { Form } from "react-bootstrap";

function SubItemCategoriesDropDown(props) {
  if (props.category === "Véhicule")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option value="">Tout</option>}
        <option>Voiture</option>
        <option>Moto</option>
        <option>Bicyclette</option>
        <option>Camion</option>
        <option>SUV</option>
        <option>Autre</option>
      </Form.Control>
    );
  if (props.category === "Loisirs")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option value="">Tout</option>}
        <option>CD</option>
        <option>Guitar</option>
        <option>Piano</option>
        <option>Autre</option>
      </Form.Control>
    );
  if (props.category === "Electronique")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option value="">Tout</option>}
        <option>Ordinateur / PC</option>
        <option>Tablette</option>
        <option>Composant PC</option>
        <option>Télephone</option>
        <option>Autre</option>
      </Form.Control>
    );
  if (props.category === "Maison et jardin")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option value="">Tout</option>}
        <option>Electroménager et vaisselles</option>
        <option>Meubles et décoration</option>
        <option>Jardin et outils de bricolage</option>
        <option>Autre</option>
      </Form.Control>
    );
  if (props.category === "Habillement")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option value="">Tout</option>}
        <option>Homme</option>
        <option>Femme</option>
        <option>Fille</option>
        <option>Garçon</option>
        <option>Bébé</option>
        <option>Unisex</option>
      </Form.Control>
    );
  if (props.category === "Jeux video")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option value="">Tout</option>}
        <option>Playstation</option>
        <option>Xbox</option>
        <option>Wii</option>
        <option>Nintendo</option>
        <option>DS</option>
        <option>PC</option>
        <option>Autre</option>
      </Form.Control>
    );
  if (props.category === "Livres")
    return (
      <Form.Control as="select" className="select">
        {props.all && <option>Tout</option>}
        <option>Famille et bien-être</option>
        <option>Actu, politique et société</option>
        <option>Etuds supérieures</option>
        <option>Santé, forme et dietétique</option>
        <option>Religions et spiritualités</option>
        <option>Histoire</option>
        <option>Loisirs créatifs, décoration et passion</option>
        <option>Science humaine</option>
        <option>Sciences, technique et médecine</option>
        <option>Entreprise et bourse</option>
        <option>Romans policiers et polars</option>
        <option>Romans et littérature</option>
        <option>Autre</option>
      </Form.Control>
    );
  return null;
}

export default SubItemCategoriesDropDown;
