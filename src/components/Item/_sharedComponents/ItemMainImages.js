import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

function ItemMainImages(props) {
  const [images, setImages] = useState(props.images.filter((x) => x !== ""));

  function validateImage(imgPath, className) {
    try {
      return (
        <div
          className={className}
          style={{
            backgroundImage:
              "url(" +
              require(process.env.REACT_APP_ITEM_UPLOAD_PATH + imgPath) +
              ")",
          }}
        ></div>
      );
    } catch (err) {
      return (
        <div
          className={className}
          style={{
            backgroundImage: "url(/images/not-available.jpg)",
          }}
        ></div>
      );
    }
  }
  /** 1 image */
  if (images.length === 1)
    return (
      <>
        <Row>
          <Col sm={12}>
            {validateImage(images[0], "item-detail-img-container-lg")}
          </Col>
        </Row>
      </>
    );

  /** 2 images */
  if (images.length === 2)
    return (
      <>
        <Row>
          <Col sm={12} md={6}>
            {validateImage(images[0], "item-detail-img-container-lg")}
          </Col>
          <Col sm={12} md={6}>
            {validateImage(images[1], "item-detail-img-container-lg")}
          </Col>
        </Row>
      </>
    );

  /** 3 images */
  if (images.length === 3)
    return (
      <>
        <Row>
          <Col sm={12} md={6}>
            {validateImage(
              images[0],
              "item-detail-img-container-lg margin-bottom-10"
            )}
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <Col xs={12}>
                {validateImage(
                  images[1],
                  "item-detail-img-container-sm margin-bottom-10"
                )}
              </Col>
              <Col xs={12}>
                {validateImage(
                  images[2],
                  "item-detail-img-container-sm margin-bottom-10"
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );

  /** 4 images */
  if (images.length === 4)
    return (
      <>
        <Row>
          <Col sm={12} md={6}>
            {validateImage(
              images[0],
              "item-detail-img-container-sm margin-bottom-10"
            )}
          </Col>
          <Col sm={12} md={6}>
            {validateImage(
              images[1],
              "item-detail-img-container-sm margin-bottom-10"
            )}
          </Col>
          <Col sm={12} md={6}>
            {validateImage(
              images[2],
              "item-detail-img-container-sm margin-bottom-10"
            )}
          </Col>
          <Col sm={12} md={6}>
            {validateImage(
              images[3],
              "item-detail-img-container-sm margin-bottom-10"
            )}
          </Col>
        </Row>
      </>
    );

  /** 5 images */
  return (
    <>
      <Row>
        <Col sm={12} md={6}>
          {validateImage(images[0], "item-detail-img-container-lg")}
        </Col>
        <Col sm={12} md={6}>
          <Row>
            <Col xs={6}>
              {validateImage(
                images[1],
                "item-detail-img-container-sm margin-bottom-10"
              )}
            </Col>
            <Col xs={6}>
              {validateImage(
                images[2],
                "item-detail-img-container-sm margin-bottom-10"
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              {validateImage(images[3], "item-detail-img-container-sm")}
            </Col>
            <Col xs={6}>
              {validateImage(images[4], "item-detail-img-container-sm")}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default ItemMainImages;
