import React from "react";
import { Form, Button } from "react-bootstrap";

function FileUpload(props) {
  return (
    <div className="upload-file-area" onClick={props.onClick}>
      <p>Selectionenr une image</p>
      <Button variant="outline-dark">Importer</Button>
      <Form.Control type="file" name={props.name} onChange={props.onChange} />
    </div>
  );
}

export default FileUpload;
