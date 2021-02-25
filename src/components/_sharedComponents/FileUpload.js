import React from "react";
import { Form } from "react-bootstrap";

function FileUpload(props) {
  return (
    <div className="upload-file-area">
      <Form.Control type="file" name="picture" onChange={props.onChange} />
      <span>Modifer</span>
    </div>
  );
}

export default FileUpload;
