import React from "react";
import BaseComponent from "../baseComponent";
import UploadTokenImageComponent from "./uploadImage";

class UploadTokenImage extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async uploadImage() {}

  render() {
    return (
      <>
        <UploadTokenImageComponent />
      </>
    );
  }
}
export default UploadTokenImage;
