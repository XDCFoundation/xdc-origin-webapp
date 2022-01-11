import React from "react";
import BaseComponent from "../baseComponent";
import UploadTokenImageDesktop from "./uploadImage";
import UploadTokenImageMobile from "./uploadImageMobile";

class UploadTokenImage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <UploadTokenImageDesktop />
      </>
    );
  }
}
export default UploadTokenImage;
