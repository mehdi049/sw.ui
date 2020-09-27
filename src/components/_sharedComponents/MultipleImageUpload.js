import React, { Component } from "react";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export default class MultipleImageUploadComponent extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj = [];
    this.fileArray = [];
    this.fileObj.push(e.target.files);
    if (this.fileObj[0].length > 5) {
      alert("Maximum 5 photos");
      this.fileObj = [];
      this.fileArray = [];
      return;
    }
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    if (this.fileArray.length < 6) this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
    console.log(this.state.file);
  }

  render() {
    return (
      <>
        <div className="multi-preview">
          {(this.fileArray || []).map((url) => (
            <>
              <img key={url} src={url} height={80} alt="..." /> &nbsp;
            </>
          ))}
          <br />
        </div>
        <input
          type="file"
          className="form-control"
          onChange={this.uploadMultipleFiles}
          multiple
          max={5}
        />
      </>
    );
  }
}
