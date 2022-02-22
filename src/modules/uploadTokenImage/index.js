import React from "react";
import BaseComponent from "../baseComponent";
import UploadTokenImageMobile from "./uploadImageMobile";

class UploadTokenImage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <UploadTokenImageMobile />
    );
  }
}
export default UploadTokenImage;
