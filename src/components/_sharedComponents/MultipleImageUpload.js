import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function MultipleImageUploadComponent(props) {
  const [fileObj, setFileObj] = useState([]);
  const [fileArray, setFileArray] = useState([]);

  useEffect(() => {
    if (props.reset) setFileArray([]);
  }, [props.reset]);

  function makeid(length) {
    var result = [];
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  }

  function uploadMultipleFiles(e) {
    if (e.target.files && e.target.files.length > 0) {
      let supportedExtension = ["jpg", "jpeg", "png"];

      let _uploadedFiles = e.target.files;
      for (let i = 0; i < _uploadedFiles.length; i++) {
        let extension = _uploadedFiles[i].name.substr(
          _uploadedFiles[i].name.toLowerCase().lastIndexOf(".") + 1
        );

        if (supportedExtension.indexOf(extension.toLowerCase()) === -1) {
          toast.error(
            "Extension de l'image " +
              _uploadedFiles[i].name +
              " est invalide, veuillez utiliser .png, .jpg, .jpeg."
          );
          return;
        }

        // < 5mb
        if (_uploadedFiles[i].size > 5242880) {
          toast.error(
            "L'image téléchargée " +
              _uploadedFiles[i].name +
              " est très grande, veuillez télécharger une image < 5 Mo."
          );
          return;
        }
      }

      if (fileArray.length >= 5 || (fileObj[0] && fileObj[0].length > 5)) {
        toast.error("Maximum 5 photos.");
        return;
      }

      setFileObj([]);
      setFileArray([]);
      fileObj.push(_uploadedFiles);

      let _filesForUpload = [];
      for (let i = 0; i < fileObj[0].length; i++) {
        if (fileArray.length < 5) {
          fileArray.push({
            key: makeid(5),
            url: URL.createObjectURL(fileObj[0][i]),
            file: _uploadedFiles[i],
          });
          _filesForUpload.push(_uploadedFiles[i]);
        } else toast.error("Maximum 5 photos.");
      }
      props.setItemImages(_filesForUpload);
      setFileArray(fileArray);
    }
  }

  function removeUploadFile(key) {
    let _fileArray = fileArray.filter((x) => x.key !== key);
    setFileArray(_fileArray);

    let _filesForUpload = [];
    _fileArray.map((x) => {
      _filesForUpload.push(x.file);
    });
    props.setItemImages(_filesForUpload);
  }

  return (
    <>
      <div className="multi-preview">
        {fileArray.map((x) => (
          <div key={x.key} className="text-center">
            <img src={x.url} height={80} alt="..." />
            <br />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="dark-blue pointer"
              onClick={() => removeUploadFile(x.key)}
            />
          </div>
        ))}
        <br />
      </div>
      <input
        type="file"
        className="form-control"
        onChange={uploadMultipleFiles}
        multiple
        accept="image/jpg,image/jpeg,image/x-png"
        max={5}
      />
    </>
  );
}

export default MultipleImageUploadComponent;
