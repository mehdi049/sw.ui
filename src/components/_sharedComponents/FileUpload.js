import React from "react";
import { Form } from "react-bootstrap";

function FileUpload() {
  return (
    <div className="upload-file-area">
      <Form.Control type="file" />
      <span className="blue">Modifer</span>
    </div>
  );
}

export default FileUpload;
